import { useState } from "react";
import { View } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';

import { styles } from "./styles";

export default function Map() {
    const [location, setLocation] = useState<LocationObject || null>(null);

    async function requestLocationPermissions() {
        const {granted} = await requestForegroundPermissionsAsync();

    if  (granted) {
        const currentPosition = await getCurrentPositionAsync();
        setLocation(currentPosition);
        
        console.log("Localização =>", currentPosition);
    }
    }

useEffect(() => {
    requestLocationPermissions();
}, []);

    return (
        <View style={styles.container}>

        </View>
    );
}

