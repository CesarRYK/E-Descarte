import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';


import Home from './src/screens/Home';
import Profile_login from './src/screens/Profile_login';
import Profile_register from './src/screens/Profile_register';
import TelaInicial from './src/screens/TelaInicial';
import Perfil from './src/screens/Perfil';
import Tabnav from './src/screens/TabNavigation';
import Amigos from './src/screens/Amigos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
        />
        <Stack.Screen
          name='Profile_login'
          component={Profile_login}

        />
        <Stack.Screen
          name='Profile_register'
          component={Profile_register}
        />

        <Stack.Screen
          name='TelaInicial'
          component={TelaInicial}
        />

        <Stack.Screen
          name='Perfil'
          component={Perfil}
        />

        <Stack.Screen
          name='Tabnav'
          component={Tabnav}
        />

        <Stack.Screen
          name='Amigos'
          component={Amigos}
        />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})