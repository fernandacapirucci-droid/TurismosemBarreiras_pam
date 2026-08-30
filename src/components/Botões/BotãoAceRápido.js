import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotãoAceRápido({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.botao]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#D1D1D1',
  },

  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
    alignItems: 'center',
  },
});