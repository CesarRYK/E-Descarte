import {View, Text, StyleSheet, TouchableOpacity, Pressable, ImageBackground} from 'react-native';

 export default function Login({ navigation }) {
     return(
        <View style={styles.container} >
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"        
            />
            <ImageBackground
                style={styles.logo}
                source={require('./imagens/e-descarte.png')}
                
            />
            <Text style={styles.cadastro}>
                Faça seu Login
            </Text>

        
                  
            <TouchableOpacity>
                
            <Text style={styles.textColor}>Insira seu email ou número de telefone...
                </Text>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textColor}>Insira sua senha...
                </Text>
            </TouchableOpacity>
                
            <TouchableOpacity>
            <Pressable
            onPress={() => navigation.navigate('Inicio')}>
                <Text style={styles.Avançar}>Continuar</Text>
            </Pressable>
                <Text style={styles.continuar}>Ou continuar com</Text>
            </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.Senha}>Esqueci minha senha
                    </Text>
                </TouchableOpacity>
        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        top: -1,
        flex: 1,
        height: 800,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    logo:{
        width: 100,
        top: -190,
        flex: 1,
        height: 80,
        resizeMode: 'cover',
        justifyContent: 'center',
        left: 142,
    },
    cadastro:{
        color: '#FFFFFF',
        padding: 8,
        top:-300,
        width: 370,
        left: 120,
        fontSize: 20,
        
        
    },
    stretch: {
        width: 400,
        top: -115,
        flex: 1,
        height: 800,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        padding: 8,
        borderRadius:10,
        marginBottom: 20,
        top:-250,
        width: 370,
        left:14,
    },

    Avançar: {
        color: '#5f9ea0',
        top: -100,
        left: 50,
        borderWidth: 3,
        borderRadius: 40,
        marginBottom: 20,
        backgroundColor: '#f8f8ff',
        borderColor: '#f5fffa',
        padding: 8,
        width: 300,
        textAlign: 'center',
        
    },

    Senha: {
        color: '#fff',
        top: -320,
        left: 110,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },    

    continuar:{
        color: '#FFFFFF',
        padding: 8,
        top:-120,
        width: 370,
        left: 110,
        fontSize: 20,
    }

    },
);