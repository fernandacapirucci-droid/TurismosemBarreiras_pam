import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Platform, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import BackG_Introducao from '../assets/BackG_Introducao.png';
import Web from '../assets/Web.png';

export default function Introducao({ navigation }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Acesso');
    }, 3500);

    return () => clearTimeout(timer);
  }, [navigation]);

  const imagem = Platform.OS === 'web'
    ? Web
    : BackG_Introducao;

  return (
    <View style={styles.container}>

      <Image
        source={imagem}
        style={styles.imagem}
        resizeMode="cover"
      />

      <LinearGradient
        colors={[
          'transparent',
          'transparent',
          'rgba(0,0,0,0.75)',
        ]}
        locations={[0, 0.5, 1]}
        style={styles.gradient}
      >
        <View style={styles.textoWrapper}>
          <Text style={styles.titulo01}>
            Turismo
          </Text>
          <Text style={styles.titulo02}>
            sem Barreiras
          </Text>
          <View style={styles.linha} />
        </View>
      </LinearGradient>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#E8D9B5',

    ...Platform.select({
      web: {
        minHeight: '100vh',
        minWidth: '100vw',
      },
    }),
  },

  imagem: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  gradient: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  textoWrapper: {
    alignItems: 'center',
    paddingBottom: 70,
  },

  titulo01: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 42,
    letterSpacing: 1,

    textShadowColor: 'rgba(0,0,0,0.4)',
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 6,
  },

  titulo02: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: 3,
    textTransform: 'uppercase',
    marginTop: 4,
  },

  linha: {
    width: 50,
    height: 3,
    backgroundColor: '#4FD1C5',
    borderRadius: 2,
    marginTop: 14,
  },

});