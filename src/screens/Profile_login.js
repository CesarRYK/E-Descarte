import {View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable} from 'react-native';

 export default function Profile_login({ navigation }) {
     return(
        <View style={styles.container} >
            <TouchableOpacity>
            <TextInput style={styles.textColor}>Insira seu email...
                </TextInput>
                </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.textColor}>Insira sua senha...
                </Text>
            </TouchableOpacity>
            <Pressable 
            onPress={() => navigation.navigate('Tabnav')}>
                <Text style={styles.textColor}>Avançar</Text>
            </Pressable>
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
    textColor: {
        color: '#5f9ea0',
        borderWidth: 3,
        borderColor: '#000000',
        backgroundColor: '#f8f8ff',
        padding: 8,
        borderRadius: 40,
        marginBottom: 20,

    },

    },
);


