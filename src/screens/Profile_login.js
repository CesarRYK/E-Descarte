import {View, Text, StyleSheet, TouchableOpacity, Pressable, ImageBackground} from 'react-native';

 export default function Profile_login({ navigation }) {
     return(
        <View style={styles.container} >
            <ImageBackground
                style={styles.stretch}
                source={require('./imagens/Fundo.png')}
                resizeMode="cover"
            />            
            <TouchableOpacity>
            <Text style={styles.textColor}>Insira seu email...
                </Text>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textColor}>Insira sua senha...
                </Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <Pressable
            onPress={() => navigation.navigate('Tabnav')}>
                <Text style={styles.textColor}>Avançar</Text>
            </Pressable>
            </TouchableOpacity>
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
        borderColor: '#000000',
        borderColor: '#f5fffa',
        backgroundColor: '#f8f8ff',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,
        top:-250,

    },

    },
);


