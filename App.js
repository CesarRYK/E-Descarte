import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';


import Home from './src/screens/Home';
import Login from './src/screens/Profile_login';
import Registro from './src/screens/Profile_register';
import TelaInicial from './src/screens/TelaInicial';
import Perfil from './src/screens/Perfil';
import Teste from './src/screens/TabNavigation';
import Mapa from './src/screens/Mapa';
// import Amigos from './src/screens/Amigos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Bem-vindo'
          component={Home}
        />
        <Stack.Screen
          name='Login'
          component={Login}

        />
        <Stack.Screen
          name='Registro'
          component={Registro}
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
          name='Teste'
          component={Teste}
        />

          <Stack.Screen
          name='Mapa'
          component={Mapa}
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