import {StyleSheet, View, Button} from 'react-native';

export default Home;

function Home({ navigation }) {
    return(
        <View style={styles.container} >
            <Button title='Visualizar perfil'
            onPress={() => navigation.navigate('Profile') }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifycontent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

