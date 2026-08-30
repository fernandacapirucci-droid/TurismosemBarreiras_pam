import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BotãoEdit from "../components/Botões/BotãoEdit";

//tem que colocar a permição de imagem
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>

      <Image style={styles.foto}/> 

      <Text style={styles.nome}>Maria Silva</Text>
      <Text style={styles.subtitulo}>maria.silva2@gmail.com</Text>
      <Text>55 (19) 99784-6768</Text>
      <BotãoEdit/>

      <Text style={styles.p}>Meus dados</Text>
      <Text style={styles.subtitulo}>Prefêrencia de viagem</Text>
      <Text style={styles.p}>Perfil de acassibilideda</Text>

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

noome: {
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