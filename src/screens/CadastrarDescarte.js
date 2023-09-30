import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { List} from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';



export default function CadastrarDescarte({ navigation }) {
    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          quality: 1,
        });
        if (!result.canceled) {
            console.log(result);
          } else {
            alert('Você não selecionou nenhuma imagem!');
          }
        };



    return(
            <View style={styles.container}>
        
                <LinearGradient style={{
                    height: 955, 
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
                
                <Pressable style={styles.import2} theme="primary" label="Choose a photo" onPress={pickImageAsync}>
                <Text> IMPORTAR</Text>
                </Pressable>
            
                <Text style={styles.TextoTitulo}>E-DESCARTE</Text>
                <Text style={styles.Text1}>DESCARTES</Text>


                <Text style={styles.Adicione}>1- Adicione uma imagem {'\n'} ao seu Descarte:</Text>
                <Text style={styles.Preencha}>2- Preencha os campos abaixo:</Text>
                <Text style={styles.Insira}>Insira um título ao seu descarte...</Text>

                <Text style={styles.ClSele}>CLIQUE PARA SELECIONAR</Text>
                <Text style={styles.Ou}>Ou</Text>
                <Text style={styles.Descreva}>Descreva o tipo de descarte...</Text>
               


                <Text style={styles.Concluir}>CONCLUIR</Text>
                <Text style={styles.TirarFoto}>TIRAR FOTO</Text>
                

                <Text style={styles.Titulo}>TÍTULO</Text>
                <Text style={styles.Tipo}>TIPO</Text>
                <Text style={styles.Unidade}>UNIDADE</Text>
                    <List.Section
                        style={styles.lista}>
                  <List.Accordion 
                    title="Selecione sua unidade de descarte..."
                    titleStyle={styles.lista1}
                     >
                     
                    <List.Item title="Unidade 01 - Av. Djalma Batista" 
                    titleStyle={styles.fonteLista2}
                    style={styles.lista2}
                    
                    />
                    <List.Item title="Unidade 02 - Avenida Mario Ypiranga" 
                    titleStyle={styles.fonteLista2}
                    style={styles.lista2}
                    />

                    <List.Item title="Unidade 03 - Ponto de Coleta Amazonas Shopping" 
                    titleStyle={styles.fonteLista2}
                    style={styles.lista2}
                    />
                  </List.Accordion>
                </List.Section>
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
    import2:{
        color: '#5f9ea0',
        top: -883,
        left: 126,
        borderWidth: 2,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 2,
        width: 100,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 11,
    },
    lista:{
        width: 290,
        top: -1020,
        left: -40,
        color: '#808080',
        backgroundColor: '#FFFFFF',
        
    },

    lista1: {
        color: '#808080',
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        fontSize: 11,

    },
   

    lista2:{
        backgroundColor: '#FFFFFF',
        width: 290,
        height: -90,
        color: '#7fffd4',
        fontWeight: 'bold',
        borderColor: '#a9a9a9',
        borderWidth: 1,
    },

    fonteLista2: {
        fontSize: 11,
        color: '#7fffd4',
        fontWeight: 'bold',
    },

    TextoTitulo: {
        color: '#f0fff0',
        fontSize: 28,
        top: -1080,      
    },

    Text1: {
        color: '#7fffd4',
        top: -1080,
    },

    LogOut: {
        top: -1030,
        left: -155,
    },

    Concluir: {
        color: '#5f9ea0',
        top: -650,
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
        top: -1160,
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
        top: -1185,
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
        top: -955,
        left: -80,
    },

    Titulo: {
        color: '#7fffd4',
        fontSize: 13,
        top: -1110,
        left: -158,
    },

    Insira: {
       fontStyle: 'italic',
       color: '#f0fff0',
       top: -930,
       left: -70,
       fontSize: 15,
    },

    Tipo: {
        color: '#7fffd4',
        fontSize: 13,
        top: -1070,
        left: -165,
    },

    Unidade: {
        color: '#7fffd4',
        fontSize: 13,
        top: -1020,
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
        top: -890,
        left: -110,
        fontWeight: 'bold',
    },

    Ou: {
        color: '#f0fff0',
        top: -910,
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
        top: -930,
        left: 95,
        fontSize: 10,
    },

    Selecione: {
        color: '#808080',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        padding: 3,
        borderRadius: 4,
        top: -890,
        left: -95,
        fontSize: 10,
    },

    linhaverde1: {
        top: -773,
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
        top: -649,
        width: 350,
    },
});