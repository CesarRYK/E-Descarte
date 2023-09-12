import { StyleSheet, View, Pressable, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default Sugestão;

function Sugestão({ navigation }) {
    return (
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

            <Text style={styles.texto}>Diga aqui a sua sugestão de como poderemos melhorar
                a experiência no aplicativo.
            </Text>

            <TouchableOpacity>
            <Text style={styles.texto2}>
            Digite aqui...
            </Text>
            </TouchableOpacity>
            
            <View>
            <Feather style={styles.box}
                name='inbox'
                size={75}
                color='#fff'
                
                />

            <Feather style={styles.seta}
                name='arrow-down'
                size={75}
                color='#fff'
                
                />

            <SimpleLineIcons style={styles.carta}
                name='envelope-letter'
                size={75}
                color='#fff'
                
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0ce8c0',

    },
    stretch: {
        width: 400,
        top: -115,
        flex: 1,
        height: 880,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    texto: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#f5fffa',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        top: -820,
        width: 360,
        fontSize: 18,
    },

    texto2: {
        top: -510,
        color: '#000000',
        borderWidth: 1,
        borderColor: '#f5fffa',
        backgroundColor: '#f8f8ff',
        padding: 5,
        borderRadius: 15,
        marginBottom: 2,
        width: 320,
        borderRightWidth: 305,
        borderLeftWidth: 0,
    },

    box: {
        top: -850,
    },

    seta: {
        top: -1000,
    },

    carta: {
        top: -1160,
    },

    LogOut: {
        top: -900,
        left: -155,
    },
});