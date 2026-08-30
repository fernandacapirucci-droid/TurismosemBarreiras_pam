import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Botão from '../components/Botões/Botão';

export default function Acessar({ navigation }) {
  return (
    <View style={styles.container}>

    <Text style={styles.cabeçalho}><b>Bem-Vindo(a)!!</b></Text>
    <Text style={styles.subtítulo}>Entre para continuar sua jornada</Text>

    <TextInput style={styles.informação} placeholder="E-mail ou Telefone" />
    <TextInput style={styles.informação} placeholder="Senha"/>
    <Botão title="Entrar" onPress={() => navigation.navigate('Home')} />
    <Text>-----ou------</Text>
    <BotaoIco/>
    <Text>Ainda não tem conta?Cadatrar-se</Text>

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

cabeçalho: {
  flex: 1,
  color: 'black',
  fontSize: 20,
  alignItems: 'center',
},

subtítulo: {
  flex: 1,
  color: 'black',
  fontSize: 12,
  alignItems: 'center',
},

informação: {
  height: 40,
  color: '#AEAEAE',
  borderColor: '#D1D1D1',
  borderWidth: 1,
  alignItems: 'center',
  gap: 8,
},

});