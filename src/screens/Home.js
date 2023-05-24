import { StyleSheet, View, Pressable, Text,  } from 'react-native';

export default Home;

function Home({ navigation }) {
    return (
        <View style={styles.container}>
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

    buttonContainer: {
        borderWidth: 3,
        borderColor: '#f5fffa',
        backgroundColor: '#3cb371',
        padding: 15,
        borderRadius: 40,
        marginBottom: 20,

    },

    textColor: {
        color: '#f5fffa',
        

    }

});
