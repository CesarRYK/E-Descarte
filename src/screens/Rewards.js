import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';

export default Rewards;

function Rewards({}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />

            <Image
                style={styles.Imagem}
                source={
                    require('./imagens/Bemol.png')}/>

            <Image
                style={styles.Imagem3}
                source={
                    require('./imagens/Ifood.png')}/>

            <Image
                style={styles.Imagem4}
                source={
                    require('./imagens/InfoStore.jpg')}/>

            <Image
                style={styles.Imagem5}
                source={
                    require('./imagens/Uber.jpg')}/>

            <Text style={styles.Texto}>
                Com os seus créditos acumulados usando o aplicativo, você pode troca-lós em qualquer loja de parceria nossa.
            </Text>

            <Text style={styles.Texto2}>
                Seus créditos: 1.300
            </Text>

            <Text style={styles.Texto3}>
                Créditos necessários: 850
            </Text>

            <Text style={styles.Texto4}>
                Créditos necessários: 700
            </Text>

            <Text style={styles.Texto5}>
                Créditos necessários: 1.000
            </Text>

            <Text style={styles.Texto6}>
                Créditos necessários: 1.250
            </Text>
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
    },

    Imagem: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        width: 120,
        height: 80,
        top: 70,
        left: -105,
    },

    Imagem3: {
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#f8f8ff',
        width: 120,
        height: 80,
        top: -10,
        left: 90,
    },

    Imagem4: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        width: 120,
        height: 80,
        top: 120,
        left: -108,
    },

    Imagem5: {
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        width: 120,
        height: 80,
        top: 40,
        left: 90,
    },

    Texto: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#f5fffa',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        top: -410,
        width: 360,
        fontSize: 18,
    },

    Texto2: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        width: 177,
        fontSize: 18,
        top: -409,
        left: -93,
    },

    Texto3: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        width: 176,
        fontSize: 14,
        top: -280,
        left: 90,
    },

    Texto4: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        width: 176,
        fontSize: 14,
        top: -105,
        left: 102,
    },

    Texto5: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        width: 190,
        fontSize: 14,
        top: -346,
        left: -97,
    },

    Texto6: {
        color: '#5f9ea0',
        borderWidth: 1,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 5,
        marginBottom: 2,
        width: 190,
        fontSize: 14,
        top: -172,
        left: -97,
    }
    }
);