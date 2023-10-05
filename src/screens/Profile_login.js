import {View, Text, StyleSheet, TouchableOpacity, Pressable, Image, TextInput} from 'react-native';
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';



export default Login; 


 function Login({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userPass, setUserPass] = useState('');
    function userLogin(){
        alert('A função foi adicionada..');
    }
     return(
        <View style={styles.container} >
        
        <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>


            <Image
                style={styles.logo}
                source={require('./imagens/e-descarte.png')}
                
            />
                    </LinearGradient>
            <Text style={styles.login}>
                Faça seu Login
            </Text>
            
            
            <TouchableOpacity>
                
            <TextInput placeholder="Insira seu e-mail ou telefone..." 
            style={styles.textColor}
             
             value={userMail}
             onChangeText={setUserMail}
             />
                
                
                
                </TouchableOpacity>
            <TouchableOpacity>
            <TextInput secureTextEntry={true} placeholder="Insira sua senha..." 
            style={styles.textColor} 
            value={userPass}
             onChangeText={setUserPass}
            
            />
            </TouchableOpacity>
                
            <TouchableOpacity>
            <Pressable
            onPress={userLogin}>
                <Text style={styles.Avançar}>Continuar</Text>
            </Pressable>
                <Text style={styles.continuar}>Ou continuar com</Text>
            </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.Senha}>Esqueci minha senha
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity>
                <Text style={styles.facebook}>Continuar com Facebook  {'\r'}
                    <Entypo
                    name='facebook'
                    size={20}
                    color='#ffffff'
                    left={10}
                    >
                </Entypo>
                    </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                <Text style={styles.google}>Continuar com Google  {'\r'}
                
                    <Image
                style={styles.imagemGoogle}
                source={require('./imagens/google.png')}
                resizeMode="cover" 

                />
                
                    </Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo:{
        top: 90,
        height: 180,
        width: 165,
        justifyContent: 'center',
        left: 220,
    },
    login:{
        color: '#FFFFFF',
        padding: 8,
        top: -690,
        width: 370,
        left: 120,
        fontSize: 20,
        fontWeight: 'bold',
        
    },
   
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius:10,
        marginBottom: 20,
        top: -680,
        width: 370,
        left: 2,
    },

    Avançar: {
        color: '#5f9ea0',
        top: -490,
        left: 40,
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
        top: -790,
        left: 110,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },    

    continuar:{
        color: '#FFFFFF',
        padding: 8,
        top: -510,
        width: 370,
        left: 100,
        fontSize: 20,
    },

    facebook: {
        color: '#ffffff',
        top: -520,
        left: 3,
        borderRadius: 40,
        marginBottom: 20,
        backgroundColor: '#00008b',
        borderColor: '#f5fffa',
        padding: 8,
        width: 300,
        textAlign: 'center',
        justifyContent: 'center',
        
    },

    google: {
        color: '#000000',
        top: -530,
        left: 2,
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