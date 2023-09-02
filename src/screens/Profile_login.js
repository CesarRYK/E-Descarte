import {View, Text, StyleSheet, TouchableOpacity, Pressable, ImageBackground, Image} from 'react-native';
import { Entypo } from "@expo/vector-icons";


 export default function Login({ navigation }) {
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
            <Text style={styles.login}>
                Faça seu Login
            </Text>
            
            
            <TouchableOpacity>
                
            <Text style={styles.textColor}>Insira seu email ou número de telefone...
                </Text>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textColor}>Insira sua senha...
                </Text>
            </TouchableOpacity>
                
            <TouchableOpacity>
            <Pressable
            onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.Avançar}>Continuar</Text>
            </Pressable>
                <Text style={styles.continuar}>Ou continuar com</Text>
            </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.Senha}>Esqueci minha senha
                    </Text>
                </TouchableOpacity>


                
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
    teste1:{
        top: -260,
        left: 120,
        color: '#000000',
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 2,
        width: 120,
        textAlign: 'center',
    },

    teste2:{
        top: -260,
        left: 220,
        color: '#008000',
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 2,
        width: 120,
        textAlign: 'center',
    },
    
    container: {
        width: 400,
        top: -1,
        flex: 1,
        height: 800,
        resizeMode: 'contain',
        justifyContent: 'center',
        display: 'flex',
    },
    logo:{
        width: 130,
        flex: 1,
        height: 140,
        resizeMode: 'cover',
        justifyContent: 'center',
        left: 142,
        top: -140,
    },
    login:{
        color: '#FFFFFF',
        padding: 8,
        top: -190,
        width: 370,
        left: 132,
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    stretch: {
        width: 400,
        top: -115,
        flex: 1,
        height: 945,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius:10,
        marginBottom: 20,
        top: -180,
        width: 370,
        left:14,
    },

    Avançar: {
        color: '#5f9ea0',
        top: -60,
        left: 50,
        borderWidth: 3,
        borderRadius: 40,
        marginBottom: 20,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        width: 300,
        textAlign: 'center',
        
    },

    Senha: {
        color: '#fff',
        top: -280,
        left: 110,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },    

    continuar:{
        color: '#FFFFFF',
        padding: 8,
        top: -85,
        width: 370,
        left: 110,
        fontSize: 20,
    },

    facebook: {
        color: '#ffffff',
        top: -60,
        left: 50,
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
        top: -60,
        left: 50,
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

    },
);