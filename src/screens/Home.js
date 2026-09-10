import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Logo from '../assets/Logo.png';
import BottomTabBar from '../components/BottomTabBar';
import colors from '../theme/colors';
import { useUsuario } from '../context/UsuarioContext';
import Rio from '../assets/Rio.jpg';
import PraiasNordeste from '../assets/PraiasNordeste.jpg';
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
  const { usuario } = useUsuario();
  const nome = usuario.nome || 'Visitante';


  const acessos = [
    { titulo: 'Minhas viagens', icone: 'briefcase', tipo: 'feather' },
    { titulo: 'Acessibilidade', icone: 'wheelchair-accessibility', tipo: 'material' },
    { titulo: 'Explorar destinos', icone: 'map-pin', tipo: 'feather' },
    { titulo: 'Suporte', icone: 'headphones', tipo: 'feather' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={['#0C0636', '#059B9A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
          >
          <View style={styles.headerTopo}>
            <Image source={Logo} style={styles.logo} />
            <View style={{ flex: 1 }}>
              <Text style={styles.appNome}>Turismo</Text>
              <Text style={styles.appNome}>sem Barreiras</Text>
            </View>
            <Feather name="bell" size={22} color="#F5C518" />
          </View>

          <Text style={styles.saudacao}>Olá, {nome}! 👋</Text>
          <Text style={styles.subSaudacao}>Que bom te ver por aqui!</Text>

          <View style={styles.cardViagem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardLabel}>Próxima viagem</Text>
              <Text style={styles.cardTitulo}>Rio de Janeiro - RJ</Text>
              <Text style={styles.cardData}>12 e 18 de Dezembro de 2026</Text>
            </View>
            <Image source={Rio} style={styles.cardImagem} />
          </View>
        </LinearGradient>

        <Text style={styles.secaoTitulo}>Acessos rápidos</Text>
        <View style={styles.grid}>
          {acessos.map((item) => (
            <TouchableOpacity key={item.titulo} style={styles.gridItem}>
              {item.tipo === 'material' ? (
                <MaterialCommunityIcons name={item.icone} size={22} color={colors.tealDark} />
              ) : (
                <Feather name={item.icone} size={22} color={colors.tealDark} />
              )}
              <Text style={styles.gridTexto}>{item.titulo}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.secaoTitulo}>Recomendação para você</Text>
        <TouchableOpacity style={styles.recomendacao}>
          <Image source={PraiasNordeste} style={styles.recomendacaoImagem} />
          <View style={{ flex: 1 }}>
            <Text style={styles.recomendacaoTexto}>Praias acessíveis</Text>
            <Text style={styles.recomendacaoTexto}>no Nordeste</Text>
          </View>
          <View style={styles.botaoSeta}>
          <Feather name="chevron-right" size={20} color={colors.white} />
          </View>
        </TouchableOpacity>
      </ScrollView>

      <BottomTabBar navigation={navigation} ativa="Home" />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerTopo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 8
  },
  appNome: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 18
  },
  saudacao: {
    color: colors.white,
    fontSize: 17,
    fontWeight: '480'
  },
  subSaudacao: {
    color: '#D9EDEA',
    fontSize: 13,
    marginTop: 2,
    marginBottom: 16
  },
  cardViagem: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 14,
    padding: 14
  },
  cardLabel: {
    fontSize: 11,
    color: colors.textGray
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1A1A2E',
    marginTop: 2
  },
  cardData: {
    fontSize: 12,
    color: colors.textGray,
    marginTop: 2
  },
  secaoTitulo: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1A1A2E',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  gridItem: {
    width: '23%',
    backgroundColor: colors.inputBg,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center'
  },
  gridTexto: {
    fontSize: 10,
    color: '#1A1A2E',
    marginTop: 6,
    textAlign: 'center'
  },
  recomendacao: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.teal,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 14,
    padding: 14,
  },
  recomendacaoTexto: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600'
  },
  cardImagem: {
  width: 100,
  height: 90,
  borderRadius: 10,
  marginLeft: 10,
},
recomendacaoImagem: {
  width: 100,
  height: 70,
  borderRadius: 10,
  marginRight: 12,
},
botaoSeta: {
  backgroundColor: '#0D8A7D',
  width: 28,
  height: 28,
  borderRadius: 14,
  justifyContent: 'center',
  alignItems: 'center',
},
});