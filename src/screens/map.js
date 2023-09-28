import { useState, useEffect } from "react";
import { View } from 'react-native';
import MapView, {Marker} from "react-native-maps";
import { 
    requestForegroundPermissionsAsync, 
    getCurrentPositionAsync, 
    LocationObject, 
    watchPositionAsync,
    LocationAccuracy } from 'expo-location';
import { styles } from "./styles";

export default function Map() {
    const locationState = useState(null);
    const location = locationState[0];
    const setLocation = locationState[1];

    async function requestLocationPermissions() {
        const {granted} = await requestForegroundPermissionsAsync();

    if  (granted) {
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
        
    }
    }

useEffect(() => {
    requestLocationPermissions();
}, []);

useEffect(() => {
    watchPositionAsync({
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
    }, (response) => {
        setLocation(response);
    });
}, []);

    return (
        <View style={styles.container}>

        {
         location &&
        <MapView
        
        style={styles.map}
        initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        >

        <Marker
            coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            }}
        />
        </MapView>
        }
        </View>
    );
}

