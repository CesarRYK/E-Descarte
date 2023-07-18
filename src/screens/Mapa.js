import { View } from 'react-native';
import MapView from 'react-native-maps';
import {css} from './css/Css'

export default Mapa;

function Mapa({}) {
return (
<View style={css.container}>
    <MapView 
        style={css.map}
        initialRegion={{
        latitude: -3.093341,
        longitude: -60.024489,
        latitudeDelda: 0.0922,
        longitudeDelta: 0.0421,
    }}
    >
</MapView>
<View style={css.search}>
    
</View>
</View>
);
}