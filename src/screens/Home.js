import { StyleSheet, View, Pressable, Text, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default Home;

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            
            <LinearGradient style={{
                height: 970, 
                width: 970, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>


                <Image
                style={styles.imagem}
                source={require('./imagens/LogoOficial.png')}
                resizeMode='stretch'
                />

                </LinearGradient>

            <Pressable style={styles.buttonContainer}
            onPress={() => navigation.navigate('Login') }>
                <Text style={styles.textColor}>Entrar</Text>
            </Pressable>
            
            <Pressable style={styles.buttonContainer2} 
            onPress={() => navigation.navigate('Registro')}>
                <Text style={styles.textColor2}>Criar uma conta</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stretch: {
        width: 420,
        top: -115,
        flex: 1,
        height: 945,
        justifyContent: 'center',
        
    
    },

    imagem: {
        justifyContent: 'center',
        top: 200,
        left: 310,
    },

    buttonContainer: {
        borderWidth: 4,
        borderColor: '#f5fffa',
        backgroundGradient: "vertical",
        backgroundGradientTop: "#333333",
        backgroundGradientBottom: "#666666",
        padding: 1,
        borderRadius: 40,
        marginBottom: 20,
        top: -450,
        width: 290,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer2: {
        borderWidth: 4,
        borderColor: '#f5fffa',
        backgroundGradient: "vertical",
        backgroundGradientTop: "#333333",
        backgroundGradientBottom: "#666666",
        padding: 1,
        borderRadius: 40,
        marginBottom: 20,
        top: -440,
        width: 290,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',

    },

    textColor: {
        color: '#f5fffa',
        fontSize: 22,
        fontWeight: 'bold',
    },

    textColor2: {
        color: '#f5fffa',
        fontSize: 22,
        fontWeight: 'bold',

    }

});
