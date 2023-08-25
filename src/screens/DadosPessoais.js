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
    



            <Text>Nome completo{'\n'}LUIZ GUSTAVO DE LIMA SILVA</Text>
            <Text>Data de Nascimento{'\n'}09/05/2001</Text>
            <Text>Cidade/Estado{'\n'}Manaus/Amazonas</Text>
            <Text>Cadastro de Pessoa Física( CPF ){'\n'}759.174.021-87 </Text>
            <Text>Número de Telefone{'\n'} (92) 99147-0298</Text>
            <Text>Email do Usuário{'\n'}gustavoluizls@hotmail.com</Text>
            



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
        fontSize: 25,
        top: -140,
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
        color: '#228b22',
        fontSize: 13,
        top: -245,
    },

    stretch: {
        width: 490,
        flex: 1,
        height: 700,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});
