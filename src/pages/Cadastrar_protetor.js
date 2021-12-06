import axios from "axios";
import { StatusBar } from "expo-status-bar";
import DatePicker from 'react-native-datepicker';
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Keyboard, FlatList, ScrollView, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function CadastraProtetor({ navigation }) {
  const [telefone, setTelefone] = useState("");
  const [cargo, setCargo] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [data_nasc, setDataNasc] = useState('2021-12-11');
  const [user, setUser] = useState("");
  const [senha, setSenha] = useState("");

  function limpar() {
    setTelefone('');
    setCargo('');
    setNome('');
    setSobrenome('');
    setRua('');
    setNumero('');
    setBairro('');
    setCidade('');
    setUf('');
    setDataNasc('');
    setUser('');
    setSenha('');
  }
  async function cadastrarDados() {
    try {
      const res = await axios.get(
        //onde está "192.168.100.93" cooque seu ipv4
        "http://192.168.183.61/api_sgpApp/cadastrar_protetor.php?telefone=" +
        telefone +
        "&cargo=" +
        cargo +
        "&nome=" +
        nome +
        "&sobrenome=" +
        sobrenome +
        "&rua=" +
        rua +
        "&numero=" +
        numero +
        "&bairro=" +
        bairro +
        "&cidade=" +
        cidade +
        "&uf=" +
        uf +
        "&data_nasc=" +
        data_nasc +
        "&user=" +
        user +
        "&senha=" +
        senha
      );
      console.log(data_nasc);
      Keyboard.dismiss();
      alert("Cadastro realizado");
      limpar();
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
        <StatusBar hidden={true}></StatusBar>

        <ScrollView>

          <View style={styles.areaTitulo}>

            <Text style={styles.titulo}>Cadastrar Protetor</Text>

          </View>

          <View style={styles.areaCad}>


            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o id do telefone</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o id"
                value={telefone}
                onChangeText={(texto) => setTelefone(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o Id do cargo</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o ID"
                value={cargo}
                onChangeText={(texto) => setCargo(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o nome do protetor</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome do protetor"
                value={nome}
                onChangeText={(texto) => setNome(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o sobrenome do protetor</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o sobrenome"
                value={sobrenome}
                onChangeText={(texto) => setSobrenome(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite a rua do protetor</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a rua"
                value={rua}
                onChangeText={(texto) => setRua(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o numero da rua</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o numero"
                value={numero}
                onChangeText={(texto) => setNumero(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite o bairro</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o bairro"
                value={bairro}
                onChangeText={(texto) => setBairro(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite a cidade</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a cidade"
                value={cidade}
                onChangeText={(texto) => setCidade(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite a UF</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite a UF"
                value={uf}
                onChangeText={(texto) => setUf(texto)}
              />
            </View>

            <View style={styles.container_data}>
              <Text style={styles.text}>Digite a data de nascimento</Text>
              <DatePicker
                style={styles.datePickerStyle}
                date={data_nasc} //initial date from state
                mode="date" //The enum of date, datetime and time
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="1800-01-01"
                maxDate="2070-12-11"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    //display: 'none',
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    marginLeft: 36,
                  },
                }}
                onDateChange={(data_nasc) => {
                  setDataNasc(data_nasc);
                }}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite nome de usuario</Text>
              <TextInput
                style={styles.input}
                placeholder="Digite o nome de usuario"
                value={user}
                onChangeText={(texto) => setUser(texto)}
              />
            </View>

            <View style={{ alignItems: "center" }}>
              <Text style={styles.text}>Digite a senha do usuario</Text>
              <TextInput
                style={styles.input2}
                placeholder="Digite a senha"
                secureTextEntry={true}
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
              />
            </View>
          </View>

          <View style={styles.areaBtn}>
            <TouchableOpacity
              style={[styles.botao, { backgroundColor: "#1d75cd" }]}
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
              onPress={() => navigation.navigate('Listar Protetores')}
            >
              <Image
                source={require('../../assets/img_listUser.png')}
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
  input2: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
    marginBottom: 15,
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
    marginBottom: 15,
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
  container_data: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  datePickerStyle: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "92%",
    padding: 10,
    fontSize: 18,
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