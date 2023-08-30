import { View, ImageBackground, StyleSheet, Text } from 'react-native';

export default Mais;

function Mais({ }) {
    return (
       <View>
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />   

        <Text style={styles.Configuracoes}>Configurações</Text>
        <Text style={styles.politica}>Política de Usuário</Text>
        <Text style={styles.sobre}>Sobre</Text>
        <Text style={styles.acessibilidade}>Acessibilidade</Text>
        <Text style={styles.conta}>Sua conta</Text>
        <Text style={styles.sair}>Sair</Text>
        <Text style={styles.suporte}>Suporte</Text>
       </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        backgroundColor: '#228b22',

        
    },
    stretch: {
        width: 490,
        flex: 1,
        height: 715,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    Configuracoes: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        borderRadius: 10,
        top: 80,
        left: 5,
        width: 200,
    },

    politica: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        top: 170,
        left: 7,
        width: 380,
    },
    
    sobre: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        top: 200,
        left: 7,
        width: 380,
    },
    
    acessibilidade: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        top: 230,
        left: 7,
        width: 380,
    },
    
    conta: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        top: 260,
        left: 7,
        width: 380,
    },
    
    sair: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        top: 290,
        left: 7,
        width: 380,
    },
    
    suporte: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 0,
        top: 320,
        left: 7,
        width: 380,
    },
    
});