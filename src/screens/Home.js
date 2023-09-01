import { StyleSheet, View, Pressable, Text, ImageBackground } from 'react-native';

export default Home;

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Home.jpeg')}
                resizeMode="cover"
            />

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
    buttonContainer: {
        borderWidth: 4,
        borderColor: '#f5fffa',
        backgroundGradient: "vertical",
        backgroundGradientTop: "#333333",
        backgroundGradientBottom: "#666666",
        padding: 1,
        borderRadius: 40,
        marginBottom: 20,
        top: -140,
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
        top: -140,
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
