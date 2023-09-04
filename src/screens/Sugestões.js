import { StyleSheet, View, Pressable, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default Sugestão;

function Sugestão({}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />

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
        justifyContent: 'center',
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
        top: -120,
        width: 360,
        fontSize: 18,
    },

    texto2: {
        top: 210,
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
        top: -150,
    },

    seta: {
        top: -300,
    },

    carta: {
        top: -460,
    }
});