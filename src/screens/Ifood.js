import { StyleSheet, View, ImageBackground} from 'react-native';

export default Ifood;

function Ifood({}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />
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
    stretch: {
        width: 400,
        top: -115,
        flex: 1,
        height: 800,
        resizeMode: 'cover',
        justifyContent: 'center',
    }
});