import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet } from 'react-native';


import Home from './src/screens/Home';
import Login from './src/screens/Profile_login';
import Registro from './src/screens/Profile_register';
import TelaInicial from './src/screens/TelaInicial';
import Perfil from './src/screens/Perfil';
import Inicio from './src/screens/TabNavigation';
import Mapa from './src/screens/Mapa';
import Rewards from './src/screens/Rewards';
import Tarefas from './src/screens/Tarefas';
import Sugestão from './src/screens/Sugestões';
import Bemol from './src/screens/Bemol';
import Ifood from './src/screens/Ifood';
import InfoStore from './src/screens/InfoStore';
import Uber from './src/screens/Uber';

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
          name='Inicio'
          component={Inicio}
        />

          <Stack.Screen
          name='Mapa'
          component={Mapa}
        />

      <Stack.Screen
          name='Rewards'
          component={Rewards}
        />

      <Stack.Screen
          name='Sugestão'
          component={Sugestão}
        />

        <Stack.Screen
          name='Tarefas'
          component={Tarefas}
        />
        
        <Stack.Screen
          name='Bemol'
          component={Bemol}
        />

        <Stack.Screen
          name='Ifood'
          component={Ifood}
        />

        <Stack.Screen
          name='InfoStore'
          component={InfoStore}
        />

        <Stack.Screen
          name='Uber'
          component={Uber}
        />

      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    
  }
})