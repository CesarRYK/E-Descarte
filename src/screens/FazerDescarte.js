
import {View, Text, StyleSheet, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function FazerDescarte({}) {
    return(
            <View style={styles.container}>
                <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>
                </LinearGradient>



                    <Text style={styles.TextoTitulo}>E-DESCARTE</Text>
                    <Text style={styles.Text1}>DESCARTES</Text>
                    <Text style={styles.Clique}>      CLIQUE PARA {'\n'} FAZER O DESCARTE</Text>
                    <Text style={styles.Historico}>Histórico de Descartes</Text>

            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between', 
    },

    TextoTitulo: {
        color: '#f0fff0',
        fontSize: 28,
        top: -870,      
    },

    Text1: {
        color: '#7fffd4',
        top: -870,
    },

    Clique: {
        color: '#f0fff0',
        top: -820,
    },

    Historico: {
        color: '#f0fff0',
        top: -610,
        left: -90,
        fontSize: 15,
    },
});