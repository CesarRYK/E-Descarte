//Imports(Não esquecer)
import{StyleSheet, View, Button} from 'react-native';

//Exports(Não esquecer)
export default Home;

//Função (Não esquecer)
function Home({ navigation }){
    return(
        <View>
            <Button
                title='Visualizar perfil'
                onPress={()=> navigation.navigate('Profile')}
            />
        </View>
    );
}

//Const para estilos)
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
});

