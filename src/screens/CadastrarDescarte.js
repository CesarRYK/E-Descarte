import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CadastrarDescarte({  }) {
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
            
                <Text style={styles.TextoTitulo}>E-DESCARTE</Text>
                <Text style={styles.Text1}>DESCARTES</Text>


                <Text style={styles.Adicione}>1- Adicione uma imagem ao seu Descarte:</Text>
                <Text style={styles.Preencha}>2- Preencha os campos abaixo:</Text>

                <Text style={styles.Concluir}>CONCLUIR</Text>
                <Text style={styles.TirarFoto}>TIRAR FOTO</Text>
                <Text style={styles.Importar}> IMPORTAR</Text>




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
        top: -920,      
    },

    Text1: {
        color: '#7fffd4',
        top: -920,
    },

    LogOut: {
        top: -880,
        left: -155,
    },

    Concluir: {
        color: '#5f9ea0',
        top: -320,
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        width: 150,
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },


    TirarFoto: {
        color: '#5f9ea0',
        top: -490,
        left: 40,
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        width: 120,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    Importar: {
        color: '#5f9ea0',
        top: -490,
        left: 40,
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        width: 120,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    Adicione: {

    },

    Preencha: {

    },
});