
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity  } from 'react-native';

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
  
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#5f9ea0',
    borderWidth: 1,
    borderColor: '#f5fffa',
    backgroundColor: '#f8f8ff',
    padding: 9,
    borderRadius: 20,
    marginBottom: 2,
    top:-620,
  },
});

export default App;