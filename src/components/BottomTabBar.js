import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../theme/colors';

const abas = [
  { nome: 'Início', rota: 'Home', icone: 'home' },
  { nome: 'Buscar', rota: 'Buscar', icone: 'search' },
  { nome: 'Minhas viagens', rota: 'MinhasViagens', icone: 'briefcase' },
  { nome: 'Suporte', rota: 'Suporte', icone: 'headphones' },
  { nome: 'Perfil', rota: 'Perfil', icone: 'user' },
];

export default function BottomTabBar({ navigation, ativa }) {
  return (
    <View style={styles.container}>
      {abas.map((aba) => {
        const ativo = aba.rota === ativa;
        return (
          <TouchableOpacity key={aba.rota} style={styles.item} onPress={() => navigation.navigate(aba.rota)}>
            <Feather name={aba.icone} size={20} color={ativo ? colors.accent : colors.textGray} />
            <Text style={[styles.texto, ativo && styles.textoAtivo]}>{aba.nome}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingVertical: 8,
    backgroundColor: colors.white,
  },
  item: { flex: 1, alignItems: 'center' },
  texto: { fontSize: 10, color: colors.textGray, marginTop: 2 },
  textoAtivo: { color: colors.accent, fontWeight: '600' },
});