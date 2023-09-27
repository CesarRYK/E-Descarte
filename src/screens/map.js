import { useState, useEffect } from "react";
import { View } from 'react-native';
import MapView from "react-native-maps";
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
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

    return (
        <View style={styles.container}>

        {
         location &&
        <MapView
        style={styles.map}
        initialRegion={{
            latitude: location.coordss.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }}
        >
            
        </MapView>
        }
        </View>
    );
}

