import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(79, 112, 99, 1)', 'rgba(194, 219, 209, 1)']}
        style={styles.background}
      >
      <StatusBar hidden={true}></StatusBar>

      <View style={styles.areaTitulo}>

        <Text style={styles.titulo}>Bem vindo!</Text>

      </View>
      

      <View style={styles.areaBtn}>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#4F7063" }]}
          onPress={() => navigation.navigate('Gerenciar Pets')}
        >
          <Image
            source={require('../../assets/pata.png')}
            style={styles.image}
          />
          <Text style={styles.botaoText}>Gerenciar{"\n"}Pets</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaBtn}>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#4F7063" }]}
          onPress={() => navigation.navigate('Gerenciar Protetores')}
        >
          <Image
            source={require('../../assets/user.jpg')}
            style={styles.image}
          />
          <Text style={styles.botaoText}>Gerenciar{"\n"}Protetores</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#4F7063" }]}
          onPress={() => navigation.navigate('Gerenciar Doações')}
        >
          <Image
            source={require('../../assets/doacao.png')}
            style={styles.image}
          />
          <Text style={styles.botaoText}>Gerenciar{"\n"}Doações</Text>
        </TouchableOpacity>
      </View>

      

      <View style={styles.tabNav}></View>
      </LinearGradient>

    </View>
  )
}

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
    fontSize: 50,
    textAlignVertical: 'center',
    color: "#fff",
    fontWeight: 'bold',
  },
  text: {
    backgroundColor: "#4F7063",
    fontSize: 50,
    height: '15%',
    textAlignVertical: 'center',
  },
  areaBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
  botao: {
    height: 127,
    padding: 15,
    borderRadius: 30,
    width: '80%',
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
  },
  botaoText: {
    textAlign: 'left',
    fontSize: 27,
    color: "#000",
    fontWeight: "bold",
  },
  image: {
    width: 90,
    height: 90,
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
});
