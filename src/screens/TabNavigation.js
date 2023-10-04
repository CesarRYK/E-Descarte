import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from 'react-native';

import TelaInicial from './TelaInicial'
import Perfil from './Perfil'
import Mais from './Mais'

const Tab = createBottomTabNavigator();

function Inicio() {
    return(
        <Tab.Navigator
        initialRouteName='TelaInicial'
        barStyle={{ backgroundColor: '#fff' }}  
        inactiveColor='#228b22'
        >  
        <Tab.Screen style={styles.Teste}
                name='Início'
                component={TelaInicial}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons 
                            name='home'
                            color={color}
                            size={32}                      
                        />
                    ),
                }}
            />
            <Tab.Screen style={styles.Teste}
                name='Perfil'
                component={Perfil}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <Feather 
                            name='user'
                            color={color}
                            size={32}                      
                        />
                    ),
                }}
            />

            <Tab.Screen style={styles.Teste}
                name='Mais'
                component={Mais}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <Feather 
                            name='align-justify'
                            color={color}
                            size={32}                      
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Inicio;

const styles = StyleSheet.create({
    Teste: {
        Color: '#006400',
    },
}
);