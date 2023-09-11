import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createNativeStackNavigator, CardStyleInterpolators } from '@react-navigation/native-stack';

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
import DadosPessoais from './src/screens/DadosPessoais';
import TelaEducacional from './src/screens/TelaEducacional';
import FazerDescarte from './src/screens/FazerDescarte';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Bem-vindo'
          component={Home}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Login'
          component={Login}
        />
        
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name='Registro'
          component={Registro}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name='TelaInicial'
          component={TelaInicial}
        />


       
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Perfil'
          component={Perfil}
        />
        

        
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Inicio'
          component={Inicio}
        />
     
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Mapa'
          component={Mapa}
        />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
          name='Rewards'
          component={Rewards}
        />

      <Stack.Screen
        options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}
          name='Sugestão'
          component={Sugestão}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Tarefas'
          component={Tarefas}
        />
        
        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Bemol'
          component={Bemol}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name='Ifood'
          component={Ifood}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
          name='InfoStore'
          component={InfoStore}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='Uber'
          component={Uber}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='DadosPessoais'
          component={DadosPessoais}
        />

        <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='TelaEducacional'
          component={TelaEducacional}
        />

          <Stack.Screen
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}  
          name='FazerDescarte'
          component={FazerDescarte}
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
    
  },
})