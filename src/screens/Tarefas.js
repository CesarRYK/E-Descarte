import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default Tarefas;

function Tarefas({ navigation }) {
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

                <View>
                    <Text style={styles.texto4}>0/3</Text>
                    <FontAwesome5 style={styles.Icone}
                    name='tasks'
                    size={80}
                    color='#fff'
                    
                    />
    
                </View>
            <View>
                <Text style={styles.texto1}>Realize um descarte de lixo eletrônico quinzenalmente.</Text>
            </View>

            <View>
                <Text style={styles.texto2}>Indique um amigo para usar o aplicativo.</Text>
            </View>

            <View>
                <Text style={styles.texto3}>Conclua 2 tarefas para receber um bônus.</Text>
            </View>



        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0ce8c0',
        justifyContent: 'space-between',

    },
    stretch: {
        width: 400,
        top: -115,
        flex: 1,
        height: 880,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    texto1: {
        top: -680,
        left: 0,
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 40,
        marginBottom: 20,
    },

    texto2: {
        top: -660,
        left: 0,
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 40,
        marginBottom: 20,
    },

    texto3: {
        top: -640,
        left: 0,
        color: '#5f9ea0',
        borderWidth: 0,
        borderColor: '#000000',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 40,
        marginBottom: 20,
    },

    texto4: {
        top: -670,
        left: 10,
        fontSize: 35,
        color: '#f0f8ff',
    },

    Icone: {
        top: -820,
        left: 0,

    },

    LogOut: {
        top: -900,
        left: -155,
    },
});