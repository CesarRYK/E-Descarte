import {View, Text, StyleSheet, Pressable} from 'react-native';

export default TelaInicial;

function TelaInicial({ navigation }) {
    return(
        <View style={styles.container}>
            <Pressable 
            onPress={() => navigation.navigate('Perfil')}>
                <Text style={styles.textColor}>Usuário</Text>
            </Pressable>
            <Text style={styles.textColor}>Mapa</Text>
            <Text style={styles.textColor}>Coleta</Text>
            <Text style={styles.textColor}>Descarte</Text>
            <Text style={styles.textColor}>Configurações</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        backgroundColor: '#0ce8c0',
        flexDirection: 'row',

        
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
