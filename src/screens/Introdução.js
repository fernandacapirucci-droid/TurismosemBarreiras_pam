import { useEffect } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Introducao({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Acesso');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>

        <Image source={BackG_Introducão}/>

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
    fontFamily: 'Inter, sans-serif',
    fontSize: '',
},

});