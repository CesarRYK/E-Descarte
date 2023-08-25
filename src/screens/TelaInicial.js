import React from "react";

import { EvilIcons } from "@expo/vector-icons";

import {View, Text, StyleSheet, ImageBackground, Pressable, Image} from 'react-native';


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



            <Text style={styles.TarefasTexto}>Tarefas</Text>
            <Text style={styles.VerDescartesTexto}>Mapa de Descartes</Text>
            <Text style={styles.EdPointsTexto}>EdPoints</Text>
            <Text style={styles.SugestoesTexto}>Sugestões</Text>




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
                style={styles.Tarefas}
                source={require('./imagens/tarefa.png')}
                />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Rewards')}
               >
                <Image
                style={styles.EdPoints}
                source={require('./imagens/pontuacao.png')}
                />
                </Pressable>

                <Pressable onPress={() => navigation.navigate('Sugestão')}
               >
                <Image
                style={styles.Sugestões}
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
        top: -10,
        left: 142,
       
    },

    Text1: {
        color: '#fff',
        top: 60,
        left: 170,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    Text2: {
        color: '#fff',
        top: 60,
        left: 170,
        fontSize: 20,
    },

    Text3: {
        color: '#7fffd4',
        top: -10,
        left: 160,
    },

    TarefasTexto:{
        top: 230,
        left: 70,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    VerDescartesTexto:{
        top: 210,
        left: 230,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff',
    },

    EdPointsTexto:{
        top: 330,
        left: 70,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff',
    },

    SugestoesTexto:{
        top: 310,
        left: 255,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        borderColor: '#006400',
        borderRadius: 1,
        shadowOpacity: 100,
        shadowRadius: 10,
    },

    Usuario: {
        top: -120,
        left: 40,
    },

    Descartes: {
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
    },

    Tarefas: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 40,
        top: -125,
        left: 60,

    },

    EdPoints: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 40,
        top: -70,
        left: 60,

    },

    Sugestões: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 40,
        top: -145,
        left: 250,
    },

    localizacao: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 40,
        top: -45,
        left: 250,
    }


});
