import React from "react";

import { EvilIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";


import { MaterialCommunityIcons } from "@expo/vector-icons";
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Pressable} from 'react-native';


export default function TelaInicial() {
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


            <TouchableOpacity>
                
                <Pressable onPress={() => navigation.navigate('Mapa')}>
            <Text style={styles.Descartes}>Descarte
            <MaterialCommunityIcons
                name='trash-can'
                size={20}
                color='#228b22'
                
                />
            </Text>
                </Pressable>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.Tarefas}>Tarefas
                <Foundation
                    name='clipboard-notes'
                    size={20}      
                    color='#228b22'                
                />
            </Text>
            </TouchableOpacity>

            
            <TouchableOpacity>
            <Text style={styles.EdPoints}>EdPoints
            <MaterialCommunityIcons
                    name='medal-outline'
                    size={20}
                    color='#228b22'
                />
            </Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text style={styles.Sugestões}>Sugestões
            <Ionicons
                 name='megaphone-outline'
                 size={20}
                 color='#228b22'
                />

            </Text>
            </TouchableOpacity>


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
    },

    Tarefas: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 55,
        top: 48,
        fontSize: 18,
        
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
        fontSize: 18,
    },

});
