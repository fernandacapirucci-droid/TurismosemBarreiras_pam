import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
import Botão from '../components/Botão';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.cabeçalho}><b>Criar conta</b></Text>
      <Text style={styles.subtitulo}>É rápido e fácil</Text>

      <TextInput style={styles.informação} placeholder="Nome completo" />
      <TextInput style={styles.informação} placeholder="E-mail ou telefone"/>
      <TextInput style={styles.informação} placeholder="Senha"/>
      <TextInput style={styles.informação} placeholder="Confirmar senha"/>
      <Button onPress={null}/> <Text style={styles.informação}>Li e aceito os</Text> 
      <Text style={styles.termoBlue}>Termos de Uso e Política de Privacidade</Text>
      <Botão title="Cadastrar" onPress={() => navigation.navigate('Perfil')} />
      <Text style={styles.baixo}>Já tem conta?Entrar</Text>

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

subtitulo:{
  flex: 1,
  color: 'black',
  fontSize: 14,
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

termoBlue: {
  flex: 1,
  color: '#059B9A',
  fontSize: 14,
  alignItems: 'center',
},

baixo: {
  flex: 1,
  color: 'black',
  fontSize: 14,
  alignItems: 'center',
}

});