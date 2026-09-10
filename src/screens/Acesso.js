import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image} from 'react-native';
import { Feather } from '@expo/vector-icons';
import colors from '../theme/colors';
import Google from '../assets/Google.png';
import { useUsuario } from '../context/UsuarioContext';

export default function Acessar({ navigation }) {
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Bem-Vindo(a)!</Text>
      <Text style={styles.subtitulo}>Entre para continuar sua jornada</Text>

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

      <TouchableOpacity>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.continue}>
        <View style={styles.linha} />
        <Text style={styles.textoContinue}>ou</Text>
        <View style={styles.linha} />
      </View>

      <TouchableOpacity style={styles.botaoGoogle}>
      <Image source={Google} style={styles.iconeGoogle} />
        <Text style={styles.textoGoogle}>Continuar com Google</Text>
      </TouchableOpacity>

      <View style={styles.rodape}>
        <Text style={styles.textoRodape}>Ainda não tem conta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.linkRodape}>Cadastre-se</Text>
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
    marginBottom: 32
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
  link: {
    fontSize: 13,
    color: colors.accent,
    marginBottom: 24
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
  continue: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28
  },
  linha: {
    flex: 1,
    height: 1,
    backgroundColor: colors.border
  },
  textoContinue: {
    marginHorizontal: 10,
    fontSize: 13,
    color: colors.textGray
  },
  botaoGoogle: {
    flexDirection: 'row',
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  textoGoogle: {
    fontSize: 14,
    color: '#333'
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
  iconeGoogle: {
  width: 18,
  height: 18,
  marginRight: 8,
  resizeMode: 'contain',
},
});