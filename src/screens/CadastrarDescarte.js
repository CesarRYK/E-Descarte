import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function CadastrarDescarte({ navigation }) {
    return(
            <View style={styles.container}>
                <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>
                </LinearGradient>

                <Image
                style={styles.imagem}
                source={require('./imagens/ImgDescarte.png')}
                
            />
            

                <Image
                style={styles.linhaverde1}
                source={require('./imagens/LinhaVerde.png')}
                />

                <Image
                style={styles.linhaverde2}
                source={require('./imagens/LinhaVerde.png')}
                />

                <Image
                style={styles.linhaverde3}
                source={require('./imagens/LinhaVerde.png')}
                />
            
                <Pressable onPress={() => navigation.navigate('TelaInicial')}>
                <Image
                style={styles.LogOut}
                source={require('./imagens/LogOut.png')}
                />
                </Pressable>

                <Text style={styles.TextoTitulo}>E-DESCARTE</Text>
                <Text style={styles.Text1}>DESCARTES</Text>


                <Text style={styles.Adicione}>1- Adicione uma imagem {'\n'} ao seu Descarte:</Text>
                <Text style={styles.Preencha}>2- Preencha os campos abaixo:</Text>
                <Text style={styles.Insira}>Insira um título ao seu descarte...</Text>

                <Text style={styles.ClSele}>CLIQUE PARA SELECIONAR</Text>
                <Text style={styles.Ou}>Ou</Text>
                <Text style={styles.Descreva}>Descreva o tipo de descarte...</Text>
                <Text style={styles.Selecione}>Selecione sua unidade de descarte...</Text>


                <Text style={styles.Concluir}>CONCLUIR</Text>
                <Text style={styles.TirarFoto}>TIRAR FOTO</Text>
                <Text style={styles.Importar}> IMPORTAR</Text>
                

                <Text style={styles.Titulo}>TÍTULO</Text>
                <Text style={styles.Tipo}>TIPO</Text>
                <Text style={styles.Unidade}>UNIDADE</Text>
            </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-between', 
    },


    imagem: {
        width: 143,
        height: 140,
        top: -830,
        left: -120,
        borderRadius: 60,
        borderColor: "#00fa9a",
        borderWidth: 5,
    },

    TextoTitulo: {
        color: '#f0fff0',
        fontSize: 28,
        top: -1060,      
    },

    Text1: {
        color: '#7fffd4',
        top: -1055,
    },

    LogOut: {
        top: -1030,
        left: -175,
    },

    Concluir: {
        color: '#5f9ea0',
        top: -600,
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
        top: -1180,
        left: 20,
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 2,
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },

    Importar: {
        color: '#5f9ea0',
        top: -1206,
        left: 140,
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 2,
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 12,
    },

    Adicione: {
        color: '#f0fff0',
        top: -1020,
        left: 60,
        fontSize: 16,
    },

    Preencha: {
        color: '#f0fff0',
        top: -930,
        left: -80,
    },

    Titulo: {
        color: '#7fffd4',
        fontSize: 13,
        top: -1130,
        left: -158,
    },

    Insira: {
       fontStyle: 'italic',
       color: '#f0fff0',
       top: -895,
       left: -70,
       fontSize: 15,
    },

    Tipo: {
        color: '#7fffd4',
        fontSize: 13,
        top: -1095,
        left: -165,
    },

    Unidade: {
        color: '#7fffd4',
        fontSize: 13,
        top: -1040,
        left: -151,
    },

    ClSele: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 4,
        width: 150,
        height: 22,
        fontSize: 10,
        textAlign: 'center',
        top: -855,
        left: -110,
        fontWeight: 'bold',
    },

    Ou: {
        color: '#f0fff0',
        top: -877,
        left: -19,
    },

    Descreva: {
        color: '#808080',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        width: 190,
        height: 22,
        padding: 4,
        borderRadius: 40,
        top: -897,
        left: 90,
        fontSize: 10,
    },

    Selecione: {
        color: '#808080',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        padding: 3,
        borderRadius: 4,
        top: -850,
        left: -95,
        fontSize: 10,
    },

    linhaverde1: {
        top: -768,
        left: 45,
        width: 350,
    },


    linhaverde2: {
        left: 30,
        top: -716,
        width: 350,
    },

    linhaverde3: {
        left: 59,
        top: -644,
        width: 350,
    },
});