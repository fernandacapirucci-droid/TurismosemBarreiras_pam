import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botão({onPress }) {
  return (
    <TouchableOpacity
      style={[styles.botao]}
      onPress={onPress}
    >
      <Text style={styles.texto}>Editar perfil</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    padding: 12,
    borderRadius: 8,
    width: '100%',
    gap: 8,
    marginTop: 10,
    },

  texto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    alignItems: 'center',
  },
});