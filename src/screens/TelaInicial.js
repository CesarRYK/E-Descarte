import React from "react";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import {View, Text, StyleSheet} from 'react-native';

export default function TelaInicial() {
    return(
        <View style={styles.container}>
            <Text style={styles.Coletas}>
                <Entypo
                 name='shop'
                    size={20}
                 color='#228b22'
                />
            </Text>
            <Text style={styles.Descartes}>
            <MaterialCommunityIcons
                 name='trash-can'
                    size={20}
                 color='#228b22'
                />
            </Text>
            <Text style={styles.Tarefas}>
                <Foundation
                    name='clipboard-notes'
                    size={20}      
                    color='#228b22'                
                />
            </Text>
            <Text style={styles.EdPoints}>
            <MaterialCommunityIcons
                 name='medal-outline'
                    size={20}
                 color='#228b22'
                />
            </Text>
            <Text style={styles.Mapa}>
            <FontAwesome5
                 name='map-marked-alt'
                    size={20}
                 color='#228b22'
                />
            
            </Text>
            <Text style={styles.Sugestões}>
            <Ionicons
                 name='megaphone-outline'
                    size={20}
                 color='#228b22'
                />
                        
            
            </Text>
            <Text style={styles.Doação}>
            <MaterialCommunityIcons
                 name='hand-heart-outline'
                    size={20}
                 color='#228b22'
            />            
            
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        backgroundColor: '#0ce8c0',

        
    },
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,
    },

    Coletas: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 55,
        top: 69,
    },

    Descartes: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 210,
        top: -39,

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
        top: -10,

        
    },

    EdPoints: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 210,
        top: -119,
    },

    Mapa: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 57,
        top: -90,
        fontSize: 17,
    },

    Sugestões: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 210,
        top: -200,
    },

    Doação: {
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 34,
        borderRadius: 40,
        marginBottom: 20,
        left: 57,
        top: -170,
    },
});
