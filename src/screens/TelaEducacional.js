import React from "react";
import {Text, StyleSheet, ScrollView,  SafeAreaView, StatusBar, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaEducacional() {
    return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <LinearGradient style={{
                height: 1500, 
                width: 393, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>

                <Image
                style={styles.imagem}
                source={require('./imagens/LixoEletronico.jpg')}
                >
                    </Image>

                    <Image
                style={styles.imagem2}
                source={require('./imagens/DescarteResiduo.png')}
                >
                    </Image>
                <Text style={styles.text}>
                O Lixo Eletrônico possui muitos nomes, como e-lixo, resíduos de equipamento eletroeletrônico (REEE) ou simplesmente resíduo eletrônico.
                Os termos se referem a produtos elétricos ou eletrônicos que são descartados por não terem mais utilidade, 
                ou seja, poderiam ser reciclados aos invés de destinados em um aterro sanitário.  
            
            
                </Text>
        
                <Text style={styles.text2}>
                Muitos dos equipamentos eletrônicos contêm grandes quantidades de metais pesados, como o Cromo, o Cádmio e o Mercúrio, que são danosos ao meio ambiente. 
                Caso esses equipamentos sejam descartados de forma incorreta, eles podem acabar contaminando o solo da região em que são descartados causando uma série de prejuízos à vida animal e vegetal da região.
                Além do que, o solo da região de descarte incorreto se torna impróprio para o cultivo, uma vez que as plantas poderão acabar se contaminando com tais metais.
                </Text>

        </LinearGradient>
        
        </ScrollView>
        </SafeAreaView>
       
    );
}


const styles = StyleSheet.create({

        container: {
          flex: 1,
          paddingTop: StatusBar.currentHeight,
         
          
          
        },
        scrollView: {
            
            
          
        },
        text: {
          fontSize: 17,
          top: -235,
          textAlign: 'auto',
          
        },

        text2: {
            fontSize: 17,
            top: 120,
            textAlign: 'auto',
          },

        imagem: {
            width: 370,
            height: 280,
            top: 20,
            left: 10,
            borderRadius: 60,
            borderColor: "#00fa9a",
            borderWidth: 2,
        },

        imagem2: {
            width: 370,
            height: 280,
            top: 220,
            left: 10,
            borderRadius: 60,
            borderColor: "#00fa9a",
            borderWidth: 2,
        },
});