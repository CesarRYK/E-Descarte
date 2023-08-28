import React from "react";
import {ImageBackground,  Text, StyleSheet, ScrollView,  SafeAreaView,} from 'react-native';

export default function TelaEducacional() {
    return(
       
        
            
            <SafeAreaView style={styles.container}>
                <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover">
            <ScrollView style={styles.scrollView}>
            
            <Text style={styles.text}>
            E-lixo, resíduos de equipamento eletroeletrônico (REEE) ou lixo eletrônico. Todos esses termos se referem à mesma coisa: produtos elétricos e eletrônicos quebrados, danificados ou sem utilidade por algum motivo e pilhas descarregadas que devem ser descartados. 
        </Text>
        
        </ScrollView>
        </ImageBackground>
        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

      stretch: {
        width: 490,
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    text: {
    fontSize: 18,
    justifyContent: 'center',
    top: 15,
    
    },

    scrollView: {

        marginHorizontal: 90,
      },
});