import React from "react";
// import MaterialBottomTabNavigator from 'react-native-vector-icon/MaterialBottomTabNavigator';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import TelaInicial from './TelaInicial'
import Perfil from './Perfil'
import Mais from './Mais'
import Amigos from './Amigos';

const Tab = createBottomTabNavigator();

function Tabnav() {
    return(
        <Tab.Navigator
            initialRouteName='TelaInicial'
            barStyle={{ backgroundColor: '#fff' }}  
            inactiveColor='#228b22'  
        >
            <Tab.Screen
                name='Início'
                component={TelaInicial}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons 
                            name='home'
                            color={color}
                            size={20}                      
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Perfil'
                component={Perfil}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <Feather 
                            name='user'
                            color={color}
                            size={20}                      
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Amigos'
                component={Amigos}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons 
                            name='account-group-outline'
                            color={color}
                            size={20}                      
                        />
                    ),
                }}
            />
            <Tab.Screen
                name='Mais'
                component={Mais}
                options={{
                    header: () => false,
                    tabBarIcon: ({ color }) => (
                        <Feather 
                            name='align-justify'
                            color={color}
                            size={20}                      
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Tabnav;


