
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default DadosPessoais;

function DadosPessoais({ navigation }) {
    return (
        
        <View style={styles.container}>
            <LinearGradient style={{
                height: 950, 
                width: 600, 
                borderRadius: 5}}
	            colors={['#009582','#009452']}>

                    </LinearGradient>        

                    <Pressable onPress={() => navigation.navigate('TelaInicial')}>
                <Image
                style={styles.LogOut}
                source={require('./imagens/LogOut.png')}
                />
                </Pressable>


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
    LogOut: {
        top: -880,
        left: -155,
    },
    
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    Usuário: {
        color: '#fff',
        fontSize: 25,
        top: -680,
        fontWeight: 'bold',
    },

    Icone1: {
        color: '#fff',
        fontSize: 120,
        top: -1060,
        left: 0,
    },

    ExplorarPerfil: {
        color: '#fff',
        fontSize: 15,
        alignItems: 'center',
        top: -685,
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
        top: -850,
        fontSize: 17,
    },

    Filtro: {
        color: '#7FFFD4',
        fontSize: 13,
        top: -850,
        
    },

    stretch: {
        width: 490,
        flex: 1,
        height: 830,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    nome:{
        color: '#7FFFD4',
        fontSize: 14,
        right:125,
        top: -660,
    },

    nome2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:78,
        top: -660,

    },

    data:{
        color: '#7FFFD4',
        fontSize: 14,
        right:110,
        top: -650,
    },

    data2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:136,
        top: -650,

    },

    cidade:{
        color: '#7FFFD4',
        fontSize: 14,
        right:129,
        top: -640,
    },

    cidade2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:112,
        top: -640,

    },

    cpf:{
        color: '#7FFFD4',
        fontSize: 14,
        right:69,
        top: -630,
    },

    cpf2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:124,
        top: -630,

    },

    num:{
        color: '#7FFFD4',
        fontSize: 14,
        right:112,
        top: -620,
    },

    num2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:126,
        top: -620,

    },

    email:{
        color: '#7FFFD4',
        fontSize: 14,
        right:124,
        top: -610,
    },

    email2:{
        color: '#FFFFFF',
        fontSize: 14,
        right:90,
        top: -610,

    },
   
});
