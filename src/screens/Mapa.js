import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity, Pressable, navigation } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => (
  <View style={styles.container}>
    <ImageBackground 
        style={styles.image}
        source={require('./mapa.jpeg')}
        resizeMode="cover"
    />

    <TouchableOpacity>
     <Text style={styles.text}>    Pesquise aqui 
       </Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity>
       
                  
            <Text style={styles.Descartes}>
            <MaterialCommunityIcons
                name='trash-can'
                size={20}
                color='#228b22'
                align= 'center'
                
                
                />
            </Text>
               
                </TouchableOpacity>
            
  
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
    height: 880,
    width: 400,
  },
  text: {
    color: '#5f9ea0',
    
    borderColor: '#90ee90',
    backgroundColor: '#f8f8ff',
    padding: 8,
    borderRadius: 20,
    
    top: -620,
    width: 350,
    left: 15,
  },

  Descartes: {
    color: '#5f9ea0',
    borderWidth: 0,
    borderColor: '#000000',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 40,
    
    left: 40,
    top: -293,
    width: 46,
    
},


});

export default App;