import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';

export default function Gerenciar_prot({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(79, 112, 99, 1)', 'rgba(194, 219, 209, 1)']}
        style={styles.background}
      >
        <StatusBar hidden={true}></StatusBar>

        <View style={styles.areaTitulo}>

          <Text style={styles.titulo}>Gerenciar Protetores</Text>

        </View>

        <View style={styles.areaBtn}>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: "#4F7063" }]}
            onPress={() => navigation.navigate('Cadastrar Protetores')}
          >
            <Image
              source={require('../../assets/img_cadProt.png')}
              style={styles.image}
            />
            <Text style={styles.botaoText}>Cadastrar{"\n"}Protetores</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaBtn}>

          <TouchableOpacity
            style={[styles.botao, { backgroundColor: "#4F7063" }]}
            onPress={() => navigation.navigate('Listar Protetores')}
          >
            <Image
              source={require('../../assets/img_listUser.png')}
              style={styles.image}
            />
            <Text style={styles.botaoText}>Visualizar{"\n"}Protetores</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.tabNav}>

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10, marginLeft: '2%' }} />

          <View style={styles.areaBtnTab}>
            <TouchableOpacity
              style={[styles.botaoTab, { backgroundColor: "#4F7063" }]}
              onPress={() => navigation.navigate('Gerenciar Pets')}
            >
              <Image
                source={require('../../assets/pata.png')}
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

          <View style={{ backgroundColor: '#000', height: '80%', width: 2, borderRadius: 10, marginRight: '2%' }} />

        </View>

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
    fontSize: 42,
    textAlignVertical: 'center',
    color: "#fff",
    fontWeight: 'bold',
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