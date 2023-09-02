import { StyleSheet, View, Pressable, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default Home;

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <LinearGradient style={{
                height: 970, 
                width: 395, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>
                    
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        justifyContent: 'center',
        display: 'flex',
        
    },
    stretch: {
        width: 420,
        top: -115,
        flex: 1,
        height: 945,
        justifyContent: 'center',
        
    
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
