import React from "react";
import {ImageBackground, Text, StyleSheet, ScrollView,  SafeAreaView, StatusBar} from 'react-native';

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

Na maioria das vezes esses produtos são jogados no lixo comum ou ficam esquecidos em alguma parte da casa, porém eles podem ser reciclados, ou seja, podem ser transformados em outras matérias-primas em vez de ser colocados em aterros sanitários.

Geralmente, os componentes dos aparelhos elétricos e eletrônicos são feitos de plástico, vidro, metais, entre outros materiais. No processo de reciclagem, os equipamentos descartados pela população são desmontados e as partes transformadas em matéria-prima para a indústria.
        </Text>
        
        </ScrollView>
        </ImageBackground>
        </SafeAreaView>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },

      stretch: {
        width: 490,
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    text: {
    fontSize: 20,
    justifyContent: 'center',
    top: 15,
    padding: 80,
    textAlign: 'left',
    borderRightWidth: 90,
    },

    scrollView: {
        marginHorizontal: -70,
        marginVertical: -70,
      },
});