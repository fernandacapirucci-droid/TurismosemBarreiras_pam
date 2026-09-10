import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../theme/colors';
import { useUsuario } from '../context/UsuarioContext';

export default function Login({ navigation }) {
  const { setUsuario } = useUsuario();
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmar, setMostrarConfirmar] = useState(false);
  const [aceitoTermos, setAceitoTermos] = useState(false);
  const handleCadastrar = () => {
    setUsuario((prev) => ({ ...prev, nome }));
    navigation.navigate('Acesso');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Criar conta</Text>
      <Text style={styles.subtitulo}>É rápido e fácil</Text>

      <View style={styles.inputWrapper}>
        <Feather name="user" size={18} color={colors.textGray} style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor={colors.textGray} value={nome} onChangeText={setNome} />
      </View>

      <View style={styles.inputWrapper}>
        <Feather name="mail" size={18} color={colors.textGray} style={styles.inputIcon} />
        <TextInput style={styles.input} placeholder="E-mail ou telefone" placeholderTextColor={colors.textGray} />
      </View>

      <View style={styles.inputWrapper}>
        <Feather name="lock" size={18} color={colors.textGray} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor={colors.textGray}
          secureTextEntry={!mostrarSenha}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
          <Feather name={mostrarSenha ? 'eye' : 'eye-off'} size={18} color={colors.textGray} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputWrapper}>
        <Feather name="lock" size={18} color={colors.textGray} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Confirmar senha"
          placeholderTextColor={colors.textGray}
          secureTextEntry={!mostrarConfirmar}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />
        <TouchableOpacity onPress={() => setMostrarConfirmar(!mostrarConfirmar)}>
          <Feather name={mostrarConfirmar ? 'eye' : 'eye-off'} size={18} color={colors.textGray} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.termos} onPress={() => setAceitoTermos(!aceitoTermos)}>
        <View style={[styles.checkbox, aceitoTermos && styles.checkboxAtivo]}>
          {aceitoTermos && <Feather name="check" size={12} color={colors.white} />}
        </View>
        <Text style={styles.textoTermos}>
          Li e aceito os <Text style={styles.linkTermos}>Termos de Uso e Política de Privacidade</Text>
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>Já tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Acesso')}>
          <Text style={styles.linkRodape}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="dark" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 24,
    paddingTop: 80
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A1A2E'
  },
  subtitulo: {
    fontSize: 14,
    color: colors.textGray,
    marginTop: 4,
    marginBottom: 28
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBg,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 14,
    outlineStyle: 'none'
  },
  inputIcon: {
    marginRight: 8,
    outlineStyle: 'none'
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    outlineStyle: 'none'
  },
  termos: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
    marginBottom: 24
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 4,
    marginRight: 8,
    marginTop: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxAtivo: {
    backgroundColor: colors.accent,
    borderColor: colors.accent
  },
  textoTermos: {
    flex: 1,
    fontSize: 12,
    color: colors.textGray,
    lineHeight: 18
  },
  linkTermos: {
    color: colors.accent,
    fontWeight: '600'
  },
  botao: {
    height: 50,
    backgroundColor: colors.primaryDark,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoBotao: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700'
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 24
  },
  textoRodape: {
    fontSize: 13,
    color: colors.textGray
  },
  linkRodape: {
    fontSize: 13,
    color: colors.accent,
    fontWeight: '600'
  },
});