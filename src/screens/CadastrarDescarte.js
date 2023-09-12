import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CadastrarDescarte({  }) {
    return(
            <View style={styles.container}>
                <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>
                </LinearGradient>
            
                <Pressable onPress={() => navigation.navigate('TelaInicial')}>
                <Image
                style={styles.LogOut}
                source={require('./imagens/LogOut.png')}
                />
                </Pressable>
            
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between', 
    },

    LogOut: {
        top: -1080,
        left: -155,
    },
});