import React from "react";
import {Text, StyleSheet, ScrollView,  SafeAreaView, StatusBar, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function TelaEducacional() {
    return(
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>

            <LinearGradient style={{
                height: 1770, 
                width: 394, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>

                <Image
                style={styles.imagem}
                source={require('./imagens/LixoEletronico.jpg')}
                />
                    

                    <Image
                style={styles.imagem2}
                source={require('./imagens/DescarteResiduo.png')}
                />

                <Image
                style={styles.imagem3}
                source={require('./imagens/Mapeamento.png')}
                />
                    
                <Text style={styles.text}>
                O Lixo Eletrônico possui muitos nomes, como e-lixo, resíduos de equipamento eletroeletrônico (REEE) ou simplesmente resíduo eletrônico.
                Os termos se referem a produtos elétricos ou eletrônicos que são descartados por não terem mais utilidade, 
                ou seja, poderiam ser reciclados aos invés de destinados em um aterro sanitário.
                
                A reciclagem de equipamentos eletroeletrônicos é separada em oito categorias: eletrodomésticos (fogão, geladeira), eletroportáteis (ventilador, liquidificador), 
                monitores, tecnologia da informação e telecomunicações (celulares, computadores), fios e cabos, pilhas e baterias, iluminação e painéis fotovoltaicos.
                Esse processo começa quando é determinado o fim da vida útil do aparelho eletrônico.  
            
            
                </Text>
        
                <Text style={styles.text2}>
                Muitos dos equipamentos eletrônicos contêm grandes quantidades de metais pesados, como o Cromo, o Cádmio e o Mercúrio, que são danosos ao meio ambiente. 
                Caso esses equipamentos sejam descartados de forma incorreta, eles podem acabar contaminando o solo da região em que são descartados causando uma série de prejuízos à vida animal e vegetal da região.
                Além do que, o solo da região de descarte incorreto se torna impróprio para o cultivo, uma vez que as plantas poderão acabar se contaminando com tais metais.
                </Text>
                 
                <Text style={styles.text3}>
                A reciclagem do lixo eletrônico começa com uma triagem em que são separados os produtos que ainda podem ser usados ou não.
                Em seguida, os aparelhos sem uso são desmontados. A carcaça, a bateria, as placas de circuito e os vidros recebem a destinação adequada de acordo com os seus componentes.
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
          top: -530,
          textAlign: 'justify',
          padding: 15,
        },

        text2: {
            fontSize: 17,
            top: -240,
            textAlign: 'justify',
            padding: 15,
          },

          text3: {
            fontSize: 17,
            top: 90,
            textAlign: 'justify',
            padding: 15,
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
            top: 400,
            left: 10,
            borderRadius: 60,
            borderColor: "#00fa9a",
            borderWidth: 2,
        },

        imagem3: {
            width: 370,
            height: 280,
            top: 700,
            left: 10,
            borderRadius: 60,
            borderColor: "#00fa9a",
            borderWidth: 2,
        },
});