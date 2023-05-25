import {View, Text, StyleSheet} from 'react-native';

export default Perfil;

function Perfil() {
    return (
        <View style={styles.container}>          
            <Text style={styles.EDescarte}>E-DESCARTE</Text>
            <Text style={styles.Filtro}>PERFIL DO USUÁRIO</Text>
            <Text style={styles.Usuário}>Olá, Luiz</Text>
            <Text style={styles.ExplorarPerfil}>Explore seu perfil</Text> 
            <Text style={styles.Nivel}>Nível</Text>
            <Text style={styles.EdPoints}>EdPoints</Text>
            <Text style={styles.DadoPessoais}>Dados pessoais</Text>
            <Text style={styles.DesempenhoUsuario}>Desempenho do Usuário</Text>  
            <Text style={styles.Estatisticas}>+ Estatisticas</Text> 
            <Text></Text>          
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

    ExplorarPerfil: {
        color: '#fff',
        fontSize: 15,
        alignItems: 'center',
        top: -90,
    },

    DadoPessoais: {
        color: '#fff',
        top: -90,
        left: -135,

    },

   DesempenhoUsuario: {
        color: '#fff',
        top: -109,
        alignItems: 'center',
    },

    Estatisticas: {
        color: '#fff',
        alignItems: 'center',
        top: -129,
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
        color: '#228b22',
        top: -210,
        left: -130,
    },

    EdPoints: {
        color: '#228b22',
        top: -227,
        left: 130,
    },

    EDescarte: {
        color: '#fff',
        top: -210,
        fontSize: 17,
    },

    Filtro: {
        color: '#228b22',
        fontSize: 12,
        top: -210,
        alignItems: 'center',
    },
});
