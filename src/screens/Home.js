import { StyleSheet, View, Pressable, Text, ImageBackground, } from 'react-native';

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
            onPress={() => navigation.navigate('Profile_login') }>
                <Text style={styles.textColor}>ENTRAR</Text>
            </Pressable>
            
            <Pressable style={styles.buttonContainer} 
            onPress={() => navigation.navigate('Profile_register')}>
                <Text style={styles.textColor}>REGISTRAR</Text>
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
        height: 800,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    buttonContainer: {
        borderWidth: 3,
        borderColor: '#f5fffa',
        backgroundGradient: "vertical",
        backgroundGradientTop: "#333333",
        backgroundGradientBottom: "#666666",
        padding: 15,
        borderRadius: 40,
        marginBottom: 20,
        top:-100,

    },

    textColor: {
        color: '#f5fffa',
        

    }

});
