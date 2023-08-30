
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

export default DadosPessoais;

function DadosPessoais() {
    return (
        
        <View style={styles.container}>
                <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />
        

            <Text style={styles.EDescarte}>E-DESCARTE</Text>
            <Text style={styles.Filtro}>PERFIL DO USUÁRIO</Text>
            <Text style={styles.Usuário}>Olá, Luiz</Text>
            <Text style={styles.ExplorarPerfil}>Explore seu perfil</Text> 
    



            <Text style={styles.nome}>Nome completo</Text>
            <Text style={styles.nome2}>LUIZ GUSTAVO DE LIMA SILVA</Text>
            <Text style={styles.data}>Data de Nascimento</Text>
            <Text style={styles.data2}>09/05/2001</Text>
            <Text style={styles.cidade}>Cidade/Estado</Text>
            <Text style={styles.cidade2}>Manaus/Amazonas</Text>
            <Text style={styles.cpf}>Cadastro de Pessoa Física( CPF )</Text>
            <Text style={styles.cpf2}>759.174.021-87</Text>
            <Text style={styles.num}>Número de Telefone</Text>
            <Text style={styles.num2}> (92) 99147-0298</Text>
            <Text style={styles.email}>Email do Usuário</Text>
            <Text style={styles.email2}>gustavoluizls@hotmail.com</Text>
            



            <EvilIcons style={styles.Icone1}
                name='user'
                color={'#fff'}
            />  


            

        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0ce8c0',
    },

    Usuário: {
        color: '#fff',
        fontSize: 20,
        top: -134,
        fontWeight: 'bold',
    },

    Icone1: {
        color: '#fff',
        fontSize: 120,
        top: -510,
        left: 0,
    },

    ExplorarPerfil: {
        color: '#fff',
        fontSize: 15,
        alignItems: 'center',
        top: -140,
    },

    Nivel: {
        color: '#228b22',
        top: -180,
        left: -130,
    },

    EdPoints: {
        color: '#228b22',
        top: -196,
        left: 130,
    },

    EDescarte: {
        color: '#fff',
        top: -250,
        fontSize: 17,
    },

    Filtro: {
        color: '#7FFFD4',
        fontSize: 13,
        top: -245,
        
    },

    stretch: {
        width: 490,
        flex: 1,
        height: 780,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    nome:{
        color: '#7FFFD4',
        fontSize: 14,
        right:125,
        top: -90,
    },

    nome2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:78,
        top: -90,

    },

    data:{
        color: '#7FFFD4',
        fontSize: 14,
        right:110,
        top: -70,
    },

    data2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:136,
        top: -70,

    },

    cidade:{
        color: '#7FFFD4',
        fontSize: 14,
        right:129,
        top: -50,
    },

    cidade2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:112,
        top: -50,

    },

    cpf:{
        color: '#7FFFD4',
        fontSize: 14,
        right:69,
        top: -30,
    },

    cpf2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:124,
        top: -30,

    },

    num:{
        color: '#7FFFD4',
        fontSize: 14,
        right:112,
        top: -10,
    },

    num2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:126,
        top: -10,

    },

    email:{
        color: '#7FFFD4',
        fontSize: 14,
        right:124,
        top: 10,
    },

    email2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:90,
        top: 10,

    },
   
});
