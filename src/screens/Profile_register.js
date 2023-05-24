import {View, Text, StyleSheet, Pressable} from 'react-native';

export default Profile_register;

function Profile_register({ navigation }) {
    return(
        <View style={styles.container} >
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
        backgroundColor: '#0ce8c0',

        
    },
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,
    },

});

