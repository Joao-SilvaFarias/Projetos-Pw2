import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';

export default function App() {

  const [distancia, setDistancia] = useState('')
  const [tempo, setTempo] = useState('');
  const [velocidadeMedia, setVelocidadeMedia] = useState('');
  const calcularVelocidadeMedia = () => {
    const d = parseFloat(distancia);
    const t = parseFloat(tempo);

    setVelocidadeMedia(d/t);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculo de velocidade média</Text>
      <TextInput style={styles.input} placeholder='Distância' keyboardType='numeric' value={distancia} onChangeText={(text) => setDistancia(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Tempo' keyboardType='numeric' value={tempo} onChangeText={(text) => setTempo(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularVelocidadeMedia}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text>{velocidadeMedia}</Text>
      <StatusBar style="auto" />
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
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  button: {
    padding: 10,
    backgroundColor: '#f00',
    borderRadius: 5
  },
  title: {
    fontSize: 30
  }
});
