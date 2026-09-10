import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import BackG_Introducao from '../assets/BackG_Introdução.png';

export default function Introducao({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Acesso');
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

        <Image source={BackG_Introducao}/>

        <Text style={styles.título_01}>Turismo</Text>
        <Text style={styles.título_02}>sem Barreiras</Text>
        

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
  título_01: {
    color: '#095169',
    fontWeight: '700',
    fontSize: 28,
},
  titulo02: {
    color: '#095169',
    fontSize: 22,
    fontWeight: '600',
  },

});