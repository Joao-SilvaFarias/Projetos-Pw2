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

  const [celcius, setCelcius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [tempFinal, setTempFinal] = useState('');

  const converterParafahrenheit = () => {
    setTempFinal(`${celcius}°C = ${celcius * 1.8 + 32}f`)
  };

  const converterParaCelcius = () => {
    setTempFinal(`${fahrenheit}f = ${(fahrenheit - 32) / 1.8}°C`);
  };

  const [massa2, setMassa2] = useState('');
  const [velocidade2, setVelocidade2] = useState('');
  const [energiaCinetica, setEnergiaCinetica] = useState('');

  const calcularEnergiaCinetica = () => {
    setEnergiaCinetica(massa2 * Math.pow(velocidade2, 2));
  }

  const [metro, setMetro] = useState('');
  const [centimetro, setCentimetro] = useState('');

  const converterParaCentimentro = () => {
    setCentimetro(`${metro}m = ${metro * 100}cm`);
  }

  const [raio, setRaio] = useState('');
  const [area, setArea] = useState('');

  const calcularArea = () => {
    const pi = 3.14;
    setArea(pi * Math.pow(raio, 2));
  }

  const [lado, setLado] = useState('');
  const [areaQ, setAreaQ] = useState('');

  const calcularAreaQuadrado = () => {
    setAreaQ(Math.pow(lado, 2) * 2);
  }

  const [valorHora, setValorHora] = useState('');
  const [horas, setHoras] = useState('');
  const [salario, setSalario] = useState('');

  const calcularSalario = () => {
    setSalario(`O seu salário é R$${parseFloat(valorHora) * horas}`);
  }

  const [tamanho, setTamanho] = useState('');
  const [vDownload, setVDownload] = useState('');
  const [tempoD, setTempoD] = useState('');

  const calcularVelocidadeDownload = () => {
    setTempoD(`${(tamanho / (vDownload / 8)) / 60}min`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
      <Text style={styles.title}>Cálculo de velocidade média</Text>
      <TextInput style={styles.input} placeholder='Distância' keyboardType='numeric' value={distancia} onChangeText={(text) => setDistancia(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Tempo' keyboardType='numeric' value={tempo} onChangeText={(text) => setTempo(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularVelocidadeMedia}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{velocidadeMedia}</Text>
      </View>
      <View style={styles.form}>
      <Text style={styles.title}>Cálculo da Força</Text>
      <TextInput style={styles.input} placeholder='Massa' keyboardType='numeric' value={massa} onChangeText={(text) => setMassa(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Aceleração' keyboardType='numeric' value={aceleracao} onChangeText={(text) => setAceleracao(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={forcaFormula}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{forca}</Text>
      </View>
      <View style={styles.form}>
      <Text style={styles.title}>Cálculo do trabalho mecânico</Text>
      <TextInput style={styles.input} placeholder='Força aplicada' keyboardType='numeric' value={f} onChangeText={(text) => setF(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Distância percorrida' keyboardType='numeric' value={d} onChangeText={(text) => setD(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularTrabalhoMecanico}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{w}</Text>
      </View>

      <View style={styles.form}>
      <Text style={styles.title}>Conversor de temperatura</Text>
      <View style={{backgroundColor: '#666', padding: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 10, gap: 5}}>
      <TextInput style={styles.input} placeholder='Graus celcius' keyboardType='numeric' value={celcius} onChangeText={(text) => setCelcius(text)}></TextInput>
      <TouchableOpacity id='temperatura' style={styles.button} onPress={converterParafahrenheit}>
        <Text style={styles.textButton}>Fahrenheit</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder='Graus farenheit' keyboardType='numeric' value={fahrenheit} onChangeText={(text) => setFahrenheit(text)}></TextInput>
      <TouchableOpacity id='temperatura' style={styles.button} onPress={converterParaCelcius}>
        <Text style={styles.textButton}>Celcius</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.title}>{tempFinal}</Text>
      </View>

      <View style={styles.form}>
      <Text style={styles.title}>Cálculo de energia cinética</Text>
      <TextInput style={styles.input} placeholder='Massa' keyboardType='numeric' value={massa2} onChangeText={(text) => setMassa2(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Distância percorrida' keyboardType='numeric' value={velocidade2} onChangeText={(text) => setVelocidade2(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularEnergiaCinetica}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{energiaCinetica}</Text>
      </View>
      <View style={styles.form}>
      <Text style={styles.title}>Converter para centímetros</Text>
      <TextInput style={styles.input} placeholder='Metro' keyboardType='numeric' value={metro} onChangeText={(text) => setMetro(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={converterParaCentimentro}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{centimetro}</Text>
      </View>
      <View style={styles.form}>
      <Text style={styles.title}>Cálculo da área do circulo</Text>
      <TextInput style={styles.input} placeholder='Raio' keyboardType='numeric' value={raio} onChangeText={(text) => setRaio(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularArea}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{area}</Text>
      </View>

      <View style={styles.form}>
      <Text style={styles.title}>Cálculo do dobro da área do quadrado</Text>
      <TextInput style={styles.input} placeholder='Medida do lado' keyboardType='numeric' value={lado} onChangeText={(text) => setLado(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularAreaQuadrado}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{areaQ}</Text>
      </View>

      <View style={styles.form}>
      <Text style={styles.title}>Cálculo de salário</Text>
      <TextInput style={styles.input} placeholder='Valor da hora' keyboardType='numeric' value={valorHora} onChangeText={(text) => setValorHora(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Horas trabalhadas' keyboardType='numeric' value={horas} onChangeText={(text) => setHoras(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularSalario}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{salario}</Text>
      </View>

      <View style={styles.form}>
      <Text style={styles.title}>Cálculo de velocidade de download</Text>
      <TextInput style={styles.input} placeholder='Tamanho em MB' keyboardType='numeric' value={tamanho} onChangeText={(text) => setTamanho(text)}></TextInput>
      <TextInput style={styles.input} placeholder='Velocidade em Mbps' keyboardType='numeric' value={vDownload} onChangeText={(text) => setVDownload(text)}></TextInput>
      <TouchableOpacity style={styles.button} onPress={calcularVelocidadeDownload}>
        <Text style={styles.textButton}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{tempoD}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 20,
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
