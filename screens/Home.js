import { StyleSheet, View, Pressable, Text } from 'react-native';

export default Home;

function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Pressable style={styles.buttonContainer}>
                <Text>ENTRAR</Text>
            </Pressable>
            <Pressable style={styles.buttonContainer}>
                <Text>REGISTRAR</Text>
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
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 20,
        marginBottom: 20
    }
});
