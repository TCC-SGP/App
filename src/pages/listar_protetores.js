import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet,
    SafeAreaView, Keyboard, FlatList, ScrollView, Image
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import Listagem from "../func/Listagem_protetor";

export default function Listar_protetores({ navigation }) {
    const [lista, setLista] = useState([]);

    //quando a tela for carregada ele chama essa função
    useEffect(() => {
        listarDados();
    }, []);
    async function listarDados() {
        try {
            //onde está "192.168.100.93" cooque seu ipv4
            const res = await axios.get("http://192.168.100.93/api_sgpApp/listar_protetor.php");
            setLista(res.data.result);
            Keyboard.dismiss();
        } catch (error) {
            console.log('Erro: ', error);
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

                    <Text style={styles.titulo}>Protetores</Text>

                </View>

                <FlatList
                    keyExtractor={item => item.id}
                    data={lista}
                    renderItem={({ item }) => (<Listagem data={item} />)}
                />
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
                        onPress={() => navigation.navigate('Cadastrar Protetores')}
                    >
                        <Image
                            source={require('../../assets/img_cadProt.png')}
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
        justifyContent: 'center',
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