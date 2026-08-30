import { View, Text, StyleSheet } from 'react-native';

//Um compenente reativo. Podemos colocar invés de props podemos colocar variavél diretamente  
export default function Saudação({nome}) {

    return (
        <View>
            <Text style={styles.Saudacao}>Olá, {nome}!! 👋</Text>
        </View>
    )
}

const styles = StyleSheet({
Saudacao: {
    color: 'white',
    fontSize: 12,
},
})
