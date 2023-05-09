import {View, Text, StyleSheet, Pressable} from 'react-native';

export default Profile_register;

function Profile_register() {
    return(
        <View style={styles.container} >
            <Text>Página de Perfil</Text>
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
});

