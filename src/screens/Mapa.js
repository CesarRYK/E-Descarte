import { View} from 'react-native';
import MapView from 'react-native-maps';



export default Mapa;

function Mapa({ navigation }) {
return (
<View>
<MapView>
    initialRegion={{
        latitude: 0,
        longitude: 0,
        latitudeDelda: 0,
        longitudeDelta: 0,
    }}
</MapView>
</View>
);
}