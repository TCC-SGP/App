import axios from "axios";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ScrollView, Image } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';

export default function CadastrarDoacao({ navigation }) {
  const [descricao, setDescricao] = useState("");
  const [nomedoador, setNomedoador] = useState("");
  const [quantia, setQuantia] = useState("");

  async function cadastrarDados() {
    try {
      const res = await axios.get(
        //onde está "192.168.100.93" cooque seu ipv4
        "http://192.168.183.61/api_sgpApp/cadastrar_doacao.php?descricao=" +
        descricao +
        "&nomedoador=" +
        nomedoador +
        "&quantia=" +
        quantia
      );
      Keyboard.dismiss();
      alert("Cadastro realizado");
    } catch (error) {
      console.log("Erro: ", error);
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(79, 112, 99, 1)', 'rgba(194, 219, 209, 1)']}
        style={styles.background}
      >
        <ScrollView>
          <StatusBar hidden={true}></StatusBar>

          <View style={styles.areaTitulo}>

            <Text style={styles.titulo}>Cadastrar Doação</Text>

          </View>


          <View style={styles.areaCad}>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite a descrição da doação</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite uma descrição"
                value={descricao}
                onChangeText={(texto) => setDescricao(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o nome do doador</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome do doador"
                value={nomedoador}
                onChangeText={(texto) => setNomedoador(texto)}
              />
            </View>


            <View style={{ alignItems: "center", marginBottom: 30 }}>
              <Text style={styles.text}>Digite a quantidade da doação</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a quantia doada"
                value={quantia}
                onChangeText={(texto) => setQuantia(texto)}
              />
            </View>
          </View>

          <View style={styles.areaBtn}>
            <TouchableOpacity
              style={[styles.botao]}
              onPress={cadastrarDados}
            >
              <Text style={styles.botaoText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

        <View style={styles.tabNav}>

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10, marginLeft: '2%' }} />

          <View style={styles.areaBtnTab}>
            <TouchableOpacity
              style={[styles.botaoTab, { backgroundColor: "#4F7063" }]}
              onPress={() => navigation.navigate('Gerenciar Protetores')}
            >
              <Image
                source={require('../../assets/user.jpg')}
                style={styles.imageTab}
              />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10 }} />

          <View style={styles.areaBtnTab}>
            <TouchableOpacity
              style={[styles.botaoTab, { backgroundColor: "#4F7063" }]}
              onPress={() => navigation.navigate('Home')}
            >
              <Image
                source={require('../../assets/img_Home.png')}
                style={styles.imageTab}
              />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10 }} />

          <View style={styles.areaBtnTab}>
            <TouchableOpacity
              style={[styles.botaoTab, { backgroundColor: "#4F7063" }]}
              onPress={() => navigation.navigate('Gerenciar Doações')}
            >
              <Image
                source={require('../../assets/doacao.png')}
                style={styles.imageTab}
              />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10 }} />

          <View style={styles.areaBtnTab}>
            <TouchableOpacity
              style={[styles.botaoTab, { backgroundColor: "#4F7063" }]}
              onPress={() => navigation.navigate('Listar Doações')}
            >
              <Image
                source={require('../../assets/lupa.png')}
                style={styles.imageTab}
              />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10, marginRight: '2%' }} />

        </View>

      </LinearGradient>

    </SafeAreaView>


  );
}

//css
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
  },
  areaTitulo: {
    alignItems: 'center',

  },
  titulo: {
    fontSize: 42,
    textAlignVertical: 'center',
    color: "#fff",
    fontWeight: 'bold',
  },
  areaCad: {
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 15,
    backgroundColor: "#4F7063",
  },
  text: {
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "center",
  },
  botao: {
    backgroundColor: "#1d75cd",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
  },
  botaoText: {
    fontSize: 22,
    color: "#FFF",
  },
  resultado: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 22,
  },
  picker: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    height: 50,
  },
  tabNav: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    backgroundColor: "#4F7063",
    height: '11%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: "#000",
  },
  areaBtnTab: {
    width: '23%',
    height: '10%',
    justifyContent: 'center',
    alignItems: "center",
  },
  botaoTab: {
    justifyContent: 'center',
    alignItems: "center",
  },
  imageTab: {
    width: 40,
    height: 40,
  },
  botaoTextTab: {
    fontSize: 17,
    color: "#000",
  },
});
