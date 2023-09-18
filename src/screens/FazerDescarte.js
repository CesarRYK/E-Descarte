import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function FazerDescarte({ navigation }) {
    return(
            <View style={styles.container}>
                <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>
                </LinearGradient>



                    <Pressable onPress={() => navigation.navigate('TelaInicial')}>
                <Image
                style={styles.LogOut}
                source={require('./imagens/LogOut.png')}
                />
                </Pressable>



            <Pressable onPress={() => navigation.navigate('CadastrarDescarte')}>
                <Image
                style={styles.Botao}
                source={require('./imagens/BotaoMais.png')}
            />
            </Pressable>

                <Image
                style={styles.Linha}
                source={require('./imagens/Linha.png')}
                />

                <Image
                style={styles.LinhaSeta1}
                source={require('./imagens/LinhaSeta.png')}
                />

                <Image
                style={styles.LinhaSeta2}
                source={require('./imagens/LinhaSeta.png')}
                />


                <Pressable onPress={() => navigation.navigate('TelaInicial')}>
                <Image
                style={styles.LogOut}
                source={require('./imagens/LogOut.png')}
                />
                </Pressable>


                    <Text style={styles.TextoTitulo}>E-DESCARTE</Text>
                    <Text style={styles.Text1}>DESCARTES</Text>
                    <Text style={styles.Clique}>      CLIQUE PARA {'\n'} FAZER O DESCARTE</Text>
                    <Text style={styles.Historico}>Histórico de Descartes</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    LogOut: {
        top: -1105,
        left: -155,
    },

    container: {
        alignItems: 'center',
        justifyContent: 'space-between', 
    },

    TextoTitulo: {
        color: '#f0fff0',
        fontSize: 28,
        top: -1095,      
    },

    Text1: {
        color: '#7fffd4',
        top: -1095,
    },

    Clique: {
        color: '#f0fff0',
        top: -1060,
    },

    Historico: {
        color: '#f0fff0',
        top: -880,
        left: -90,
        fontSize: 15,
    },

    Botao: {
        top: -745,
        width: 150,
        height: 150,
    },

    Linha: {
        top: -710,
        left: 80,
    },

    LinhaSeta1: {
        top: -550,
        
    },

    LinhaSeta2: {
        top: -400,

    },
});