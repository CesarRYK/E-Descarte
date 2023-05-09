import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Profile_login from './screens/Profile_login';
import Profile_register from './screens/Profile_register';

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
      </Stack.Navigator>
      <StatusBar/>
    </NavigationContainer>
  );
}


