import {View, Text, StyleSheet, Pressable, ImageBackground} from 'react-native';

export default Registro;

function Registro({ navigation }) {
    return(
        <View style={styles.container} >
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />     
            <ImageBackground
                style={styles.logo}
                source={require('./imagens/e-descarte.png')}
                
            />
            <Text style={styles.cadastro}>
                Faça seu cadastro
            </Text>



            <Text style={styles.textColor}>Insira seu nome completo...</Text>
            <Text style={styles.textColor}>Insira seu email...</Text>
            <Text style={styles.textColor}>Insira sua senha...</Text>
            <Text style={styles.textColor}>Repita sua senha...</Text>
            <Text style={styles.textColor}>Insira seu telefone...</Text>
            <Pressable 
            onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.avancar}>Continuar</Text>
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

    logo:{
        width: 100,
        top: -130,
        flex: 1,
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        left: 1,
    },

    cadastro:{
        color: '#FFFFFF',
        padding: 8,
        top:-190,
        width: 370,
        left: 108,
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
        top: -150,
        width: 370,
        
    },

    avancar: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,
        width: 200,
        top: -60,
        textAlign: 'center',
    }


});

