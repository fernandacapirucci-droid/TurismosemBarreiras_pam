import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IntroducaoScrens from './src/screens/IntroduçãoScreens';
import AcessoScreen from './src/screens/AcessoScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

//<Stack.Navigator initialRouteName=""> Ele  mostra qual é a primeira página que vai aparecer
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Introdução">
        <Stack.Screen name="Introdução" component={IntroducaoScrens} />
        <Stack.Screen name="Acesso" component={AcessoScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App