import {View, Text, StyleSheet,} from 'react-native';

export default Perfil;

function Perfil() {
    return (
        <View style={styles.container}>
            <Text style={styles.textColor}>Fernando</Text>
            <Text style={styles.textColor}>Configurações</Text>
            
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

    borda: {

    }
});
