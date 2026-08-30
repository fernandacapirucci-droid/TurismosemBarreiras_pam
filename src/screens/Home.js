import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BotaoAceRápido from "../components/Botões/BotãoAceRápido";
import Saudação from '../components/Saudação';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image source={Logo} style={styles.logo}/>

      <Text style={styles.cabecalho}>Turismo</Text>
      <Text style={styles.subtitulo}>sem Barreiras</Text>
      <Saudação nome= {nome}/>

      <Text style={styles.p}>Próxima viagem</Text>
      <Text style={styles.subtitulo}>Rio de Janeiro - RJ</Text>
      <Text style={styles.p}>12 e 18 de Dezembro de 2026</Text>
      <Image souce={Rio}/>

      <Text>Acesso Rápido</Text>
      <BotaoAceRápido title="Minhas viagens" onPress={() => navigation.navigate()}/>
      <BotaoAceRápido title="Acessibilidade" onPress={() => navigation.navigate()}/>
      <BotaoAceRápido title="Explorar destinos" onPress={() => navigation.navigate()}/>
      <BotaoAceRápido title="Suporte" onPress={() => navigation.navigate()}/>

      <Text>Recomendação para você</Text>
      <Text>Praias acessíveis no Nordeste</Text>

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
  color: 'white',
  fontSize: 24,
},

subtitulo: {
  flex: 1,
  color: 'white',
  fontSize: 18,
},

p: {
  flex: 1,
  color: '#095169',
  fontSize: 14,
},



});