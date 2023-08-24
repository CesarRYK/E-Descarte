import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


import { MaterialCommunityIcons } from "@expo/vector-icons";
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity, Pressable, Image} from 'react-native';


export default function TelaInicial({ navigation }) {
    return(
        <View style={styles.container}>
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />
            
            <Text style={styles.textColor}>E-Descarte</Text>
            <Text style={styles.Text3}>PÁGINA INICIAL</Text>
            <Text style={styles.Text1}>Olá Luiz,</Text>
            <Text style={styles.Text2}>Vamos começar!</Text>

            <EvilIcons style={styles.Usuario}
                name='user'
                size={140}
                color='#fff'
                
                />


            

               
               <Pressable onPress={() => navigation.navigate('Mapa')}
               >
                <Image
                style={styles.localizacao}
                source={require('./imagens/localizacao.png')}
                />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Tarefas')}
               >
                <Image
                style={styles.localizacao}
                source={require('./imagens/tarefa.png')}
                />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Rewards')}
               >
                <Image
                style={styles.localizacao}
                source={require('./imagens/pontuacao.png')}
                />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Sugestão')}
               >
                <Image
                style={styles.localizacao}
                source={require('./imagens/melhoria.png')}
                />
                </Pressable>






            


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        backgroundColor: '#228b22',

        
    },
    stretch: {
        width: 490,
        flex: 1,
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    textColor: {
        color: '#f0fff0',
        fontSize: 28,
        top: 15,
        left: 142,
       
    },

    Text1: {
        color: '#fff',
        top: 80,
        left: 170,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    Text2: {
        color: '#fff',
        top: 80,
        left: 170,
        fontSize: 20,
    },

    Text3: {
        color: '#7fffd4',
        top: 9,
        left: 160,
    },

    Usuario: {
        top: -20,
        left: 40,
    },

    Descartes: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 40,
        top: 45,
        fontSize: 18,
        width: 161,
    },

    Tarefas: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 48,
        top: 50,
        fontSize: 18,
        width: 150,
        
    },

    EdPoints: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 220,
        top: -179,
        fontSize: 18,
    },

    Sugestões: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 215,
        top: -175,
        
    },

    localizacao: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 40,
    }


});
