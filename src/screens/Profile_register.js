import {View, Text, StyleSheet, Pressable, ImageBackground} from 'react-native';

export default Profile_register;

function Profile_register({ navigation }) {
    return(
        <View style={styles.container} >
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />            
            <Text style={styles.textColor}>Insira seu nome completo...</Text>
            <Text style={styles.textColor}>Insira seu email...</Text>
            <Text style={styles.textColor}>Insira sua senha...</Text>
            <Text style={styles.textColor}>Insira seu telefone...</Text>
            <Pressable 
            onPress={() => navigation.navigate('TelaInicial')}>
                <Text style={styles.textColor}>Avançar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stretch: {
        width: 490,
        flex: 1,
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,
        top: -200,
    },


});

