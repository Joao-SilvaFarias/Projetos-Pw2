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

  const [massa, setMassa] = useState('');
  const [aceleracao, setAceleracao] = useState('');
  const [forca, setForca] = useState('');

  const forcaFormula = () => {
    const m = parseFloat(massa);
    const a = parseFloat(aceleracao);

    setForca(m*a);
  }

  const [f, setF] = useState('');
  const [d, setD] = useState('');
  const [w, setW] = useState('');

  const calcularTrabalhoMecanico = () => {
    const forca = parseFloat(f);
    const distancia = parseFloat(d);

    setW(forca*distancia);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.title}>Calculo de velocidade média</Text>
      <TextInput style={styles.input} placeholder='Distância' keyboardType='numeric' value={distancia} onChangeText={(text) => setDistancia(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Tempo' keyboardType='numeric' value={tempo} onChangeText={(text) => setTempo(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularVelocidadeMedia}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{velocidadeMedia}</Text>
      </View>
      <View style={styles.form}>
      <Text style={styles.title}>Calculo da Força</Text>
      <TextInput style={styles.input} placeholder='Massa' keyboardType='numeric' value={massa} onChangeText={(text) => setMassa(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Aceleração' keyboardType='numeric' value={aceleracao} onChangeText={(text) => setAceleracao(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={forcaFormula}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{forca}</Text>
      </View>
      <View style={styles.form}>
      <Text style={styles.title}>Calculo do trabalho mecânico</Text>
      <TextInput style={styles.input} placeholder='Força aplicada' keyboardType='numeric' value={f} onChangeText={(text) => setF(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Distância percorrida' keyboardType='numeric' value={d} onChangeText={(text) => setD(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularTrabalhoMecanico}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{w}</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    gap: 20,
    backgroundColor: '#444',
    overflow: 'auto', 
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: "#444",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    color: '#fff'
  },
  button: {
    padding: 10,
    backgroundColor: '#00f',
    borderRadius: 5
  },
  textButton: {
    color: "#fff"
  },
  title: {
    fontSize: 30, 
    color: '#fff'
  }, 
  form: {
    backgroundColor: '#666',
    padding: 20,
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 10
  }
});
