import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';


export default function TelaInicial({ navigation }) {
    return(
        <View style={styles.container}>
                  <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>

                    </LinearGradient>  
            
            <Text style={styles.textColor}>E-Descarte</Text>
            <Text style={styles.Text3}>PÁGINA INICIAL</Text>
            <Text style={styles.Text1}>Olá Luiz,</Text>
            <Text style={styles.Text2}>Vamos começar!</Text>


            <Text Pressable onPress={() => navigation.navigate('TelaEducacional')}>
                Teste
            </Text>

            <Pressable onPress={() => navigation.navigate('Tarefas')}>
            <Text style={styles.TarefasTexto}>Tarefas</Text>
            </Pressable>

            
            <Pressable onPress={() => navigation.navigate('Map')}>
            <Text style={styles.VerDescartesTexto}>Mapa de Descartes</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('FazerDescarte')}>
            <Text style={styles.EdPointsTexto}>Descartar</Text>
            </Pressable>

            <Pressable onPress={() => navigation.navigate('Sugestão')}>
            <Text style={styles.SugestoesTexto}>Sugestões</Text>
            </Pressable>
        
            <Pressable onPress={() => navigation.navigate('TelaEducacional')}>
            <Text style={styles.Educacional}>educaçãokkk</Text>
            </Pressable>
    
            <EvilIcons style={styles.Usuario}
                name='user'
                size={140}
                color='#fff'
                
                />

               <Pressable onPress={() => navigation.navigate('Map')}
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

                <Pressable onPress={() => navigation.navigate('FazerDescarte')}
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
        alignItems: 'center',
        justifyContent: 'space-between',

        
    },
    stretch: {
        width: 490,
        flex: 1,
        height: 780,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    textColor: {
        color: '#f0fff0',
        fontSize: 28,
        top: -890,
               
    },

    Text1: {
        color: '#fff',
        top: -820,
        left: 10,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    Text2: {
        color: '#fff',
        top: -820,
        left: 45,
        fontSize: 20,
    },

    Text3: {
        color: '#7fffd4',
        top: -890,
    
    },

    TarefasTexto:{
        top: -520,
        left: -70,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 17,
    },
    VerDescartesTexto:{
        top: -710,
        left: -68,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff',
    },

    EdPointsTexto:{
        top: -730,
        left: 70,
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ffffff',
    },

    SugestoesTexto:{
        top: -582,
        left: 70,
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 15,
        borderColor: '#006400',
        borderRadius: 1,
        shadowOpacity: 100,
        shadowRadius: 10,
    },

    Usuario: {
        top: -1075,
        left: -90,
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
        top: -875,
        left: -70,

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
        top: -1125,
        left: 70,

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
        top: -1035,
        left: 69,
    },

        Educacional: {
        width: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 40,
        top: -900,
        left: 69,
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
        top: -1025,
        left: -75,
    }


});
