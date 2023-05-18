import {View, Text, StyleSheet, Pressable} from 'react-native';

export default Profile_login;

function Profile_login() {
    return(
        <View style={styles.container} >
            <Text style={styles.textColor}>Página de Perfil</Text>
            <Pressable>
                <Text>Ok</Text>
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
    textColor: {
        color: '#f5fffa',

    },
});


