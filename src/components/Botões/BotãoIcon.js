import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

export default function BotaoIcone({ title, onPress, icone, cor = '#fff' }) {
  return (
    <TouchableOpacity
      style={[styles.botao, { backgroundColor: cor }]}
      onPress={onPress}
    >
      {icone && <Image source={Google} style={styles.icone} />}
      <Text style={styles.texto}>Continuar com Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D1D1',
    width: '100%',
    marginTop: 10,
  },
  
  icone: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  texto: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
});