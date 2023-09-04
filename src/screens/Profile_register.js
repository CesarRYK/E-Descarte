import {View, Text, StyleSheet, Pressable, ImageBackground, Image} from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

export default Registro;

function Registro({ navigation }) {
    return(
        <View style={styles.container} >
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />     
            <ImageBackground
                style={styles.logo}
                source={require('./imagens/e-descarte.png')}
                
            />
            <Text style={styles.cadastro}>
                Faça seu cadastro
            </Text>



            <Text style={styles.textColor}>
            <EvilIcons
            name='user'
            size={19}
            color='#000000'
            
            >
                </EvilIcons>
                Insira seu nome completo...
            </Text>



            <Text style={styles.textColor}>Insira seu email...</Text>



            <Text style={styles.textColor}>Insira sua senha...</Text>



            <Text style={styles.textColor}>Repita sua senha...</Text>


            <Text style={styles.textColor}>Insira seu telefone...</Text>




            <Pressable 
            onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.avancar}>Continuar</Text>
            </Pressable>

            <Text style={styles.continuar}>Ou continuar com</Text>

            <Text style={styles.facebook}>Continuar com Facebook  {'\r'}
                <Entypo
                    name='facebook'
                    size={20}
                    color='#ffffff'
                    left={10}
                    >
                </Entypo>
                    </Text>
                

                <Text style={styles.google}>Continuar com Google  {'\r'}
                    <Image
                style={styles.imagemGoogle}
                source={require('./imagens/google.png')}
                resizeMode="cover" 

                />
                
                    </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stretch: {
        width: 490,
        flex: 1,
        height: 830,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    logo:{
        width: 110,
        top: -80,
        flex: 1,
        height: 120,
        resizeMode: 'cover',
        justifyContent: 'center',
        left: 1,
    },

    cadastro:{
        color: '#FFFFFF',
        padding: 8,
        top: -90,
        width: 370,
        left: 100,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textColor: {
        color: '#5f9ea0',
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        borderRadius: 10,
        marginBottom: 20,
        top: -80,
        width: 370,
        height: -35,
        textAlign: 'left',
        alignContent: 'center',
        fontSize: 15,
        
    },

    avancar: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,
        width: 300,
        top: -40,
        textAlign: 'center',
    },

    facebook: {
        color: '#ffffff',
        top: -30,
        left: 0,
        borderRadius: 40,
        marginBottom: 20,
        backgroundColor: '#00008b',
        borderColor: '#f5fffa',
        padding: 8,
        width: 300,
        textAlign: 'center',
        
    },

    google: {
        color: '#000000',
        top: -30,
        left: 0,
        borderRadius: 40,
        marginBottom: 20,
        backgroundColor: '#ffffff',
        borderColor: '#f5fffa',
        padding: 8,
        width: 300,
        textAlign: 'center',
        
    },

    imagemGoogle: {
       width: 18,
       height: 18,
     
    },

    continuar:{
        color: '#FFFFFF',
        padding: 8,
        top: -60,
        width: 370,
        left: 110,
        fontSize: 20,
    },


});

