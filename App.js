import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UsuarioProvider } from './src/context/UsuarioContext';

import IntroducaoScrens from './src/screens/Introducao';
import AcessoScreen from './src/screens/Acesso';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import PerfilScreen from './src/screens/Perfil';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <UsuarioProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Introdução" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Introdução" component={IntroducaoScrens} />
          <Stack.Screen name="Acesso" component={AcessoScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Perfil" component={PerfilScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </UsuarioProvider>
  );
}

export default App;