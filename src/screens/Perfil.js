import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default Perfil;

function Perfil({ navigation }) {
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
            <Text style={styles.Nivel}>Nível</Text>
            <Text style={styles.EdPoints}>EdPoints</Text>

            <Pressable
            onPress={() => navigation.navigate('DadosPessoais')}>
            <Text style={styles.DadoPessoais}>Dados pessoais</Text>
            </Pressable>

            <Text style={styles.DesempenhoUsuario}>Desempenho do Usuário</Text>  
            <Text style={styles.Estatisticas}>+ Estatisticas</Text> 
            
            <EvilIcons style={styles.Icone1}
                name='user'
                color={'#fff'}
            />  

            <Ionicons style={styles.Icone2}
                name='rocket-outline'
                color={'#fff'}
            /> 


            <Pressable
            onPress={() => navigation.navigate('DadosPessoais')}>
            <FontAwesome style={styles.Icone3}
                name='user-circle-o'
                color={'#fff'}
            />
            </Pressable>


            <Ionicons style={styles.Icone4}
                name='stats-chart-outline'
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
        top: -80,
    },

    Icone1: {
        color: '#fff',
        fontSize: 120,
        top: -330,
        left: 0,
    },

    Icone2: {
        color: '#fff',
        fontSize: 25,
        top: -240,
        left: 0,
    },

    Icone3: {
        color: '#fff',
        fontSize: 25,
        top: -265,
        left: -130,
    },

    Icone4: {
        color: '#fff',
        fontSize: 25,
        top: -290,
        left: 136,
    },

    Icone5: {
        color: '#fff',
        fontSize: 25,
        top: 0,
        left: 0,
    },

    ExplorarPerfil: {
        color: '#fff',
        fontSize: 15,
        alignItems: 'center',
        top: -85,
    },

    DadoPessoais: {
        color: '#fff',
        top: -61,
        left: -135,

    },

   DesempenhoUsuario: {
        color: '#fff',
        top: -80,
        alignItems: 'center',
    },

    Estatisticas: {
        color: '#fff',
        alignItems: 'center',
        top: -99,
        left: 130,
    },

    DescartesDia: {
        color: '#5f9ea0',
    },

    MetaDescartes: {
        color: '#5f9ea0',
    },

    ColetasDia: {
        color: '#5f9ea0',
    },

    MetaColetas: {
        color: '#5f9ea0',
    },

    TotalDescartes: {
        color: '#5f9ea0',
    },

    TotalColetas: {
        color: '#5f9ea0', 
    },

    Nivel: {
        color: '#7FFFD4',
        top: -180,
        left: -130,
    },

    EdPoints: {
        color: '#7FFFD4',
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
});
