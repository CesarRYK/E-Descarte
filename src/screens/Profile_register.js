import {View, Text, StyleSheet, Pressable, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


export default Registro;



function Registro({ navigation }) {

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');



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



            <Text style={styles.cadastro}>
                Faça seu cadastro
            </Text>



            <TextInput placeholder="Insira seu nome completo..." 
            style={styles.textColor} onChangeText={text=>setNome(text)} />



            <TextInput placeholder="Insira seu email..." 
            style={styles.textColor} onChangeText={text=>setNome(text)} />



            <TextInput secureTextEntry={true}placeholder="Insira sua senha..." 
            style={styles.textColor} onChangeText={text=>setNome(text)} />



            <TextInput secureTextEntry={true}placeholder="Repita sua senha..." 
            style={styles.textColor} onChangeText={text=>setNome(text)} />


            <TextInput placeholder="Insira seu telefone..." 
            style={styles.textColor} onChangeText={text=>setNome(text)} />




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
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    stretch: {
        width: 490,
        flex: 1,
        height: 830,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    logo:{
        top: 90,
        height: 180,
        width: 165,
        justifyContent: 'center',
        left: 220,
    },

    cadastro:{
        color: '#FFFFFF',
        padding: 8,
        top: -690,
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
        top: -680,
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
        top: -650,
        textAlign: 'center',
    },

    facebook: {
        color: '#ffffff',
        top: -660,
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
        top: -670,
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
        top: -660,
        width: 370,
        left: 110,
        fontSize: 20,
    },


});

