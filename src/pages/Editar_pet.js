import axios from "axios";
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from "expo-status-bar";


export default function EditarPets({route, navigation}) {
    const [id, setId] = useState("");
    const [protetor, setProtetor] = useState("");
    const [tipo, setTipo] = useState("");
    const [nome, setNome] = useState("");
    const [porte, setPorte] = useState("");
    const [raca, setRaca] = useState("");
    const [idade, setIdade] = useState("");

    useEffect(() => {
        editar();
    }, []);

    //monta o objeto com os itens clicados
    async function editar() {
        setId(route.params?.data.id)
        setProtetor(route.params?.data.protetor)
        setTipo(route.params?.data.tipo)
        setNome(route.params?.data.nome)
        setPorte(route.params?.data.porte)
        setRaca(route.params?.data.raca)
        setIdade(route.params?.data.idade)
    }
    //altera os itens

    async function alterarDados() {
        try {
            const res = await axios.get(
                "http://192.168.183.61/apireact/alterar_pet.php?protetor=" +
                protetor +
                "&tipo_pet=" +
                tipo +
                "&nome=" +
                nome +
                "&porte=" +
                porte +
                "&raca=" +
                raca +
                "&idade=" +
                idade +
                "&id=" +
                id
            );
            console.log(res.data.result);
            setLista(res.data.result);
            Keyboard.dismiss();
            alert("Registro alterado");
            limpar();
            listarDados();
        } catch (error) {
            console.log("Erro: ", error);
        }
    }


    return (
        <ScrollView style={styles.container}>
            <StatusBar hidden={true}></StatusBar>

            <Text style={styles.titulo}>Editar Pets</Text>


            <View style={styles.areaCad}>
                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text}>Digite o nome do pet</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome do pet"
                        value={nome}
                        onChangeText={(texto) => setNome(texto)}
                    />
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text}>Digite o id do Protetor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite o nome do Protetor"
                        value={protetor}
                        onChangeText={(texto) => setProtetor(texto)}
                    />
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text}>Digite o tipo do animal</Text>

                    <TouchableOpacity style={styles.picker}>
                        <Picker
                            selectedValue={tipo}
                            onValueChange={(itemValue, itemIndex) => setTipo(itemValue)}
                        >
                            <Picker.Item label="Selecione o tipo" value="" />
                            <Picker.Item label="Gato" value="1" />
                            <Picker.Item label="Cachorro" value="2" />
                        </Picker>
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text}>Digite a raça do pet</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a raça do pet"
                        value={raca}
                        onChangeText={(texto) => setRaca(texto)}
                    />
                </View>

                <View style={{ alignItems: "center" }}>
                    <Text style={styles.text}>Digite o porte do pet</Text>

                    <TouchableOpacity style={styles.picker}>
                        <Picker
                            selectedValue={porte}
                            onValueChange={(itemValue, itemIndex) => setPorte(itemValue)}
                        >
                            <Picker.Item label="Selecione o porte" value="" />
                            <Picker.Item label="Pequeno" value="Pequeno" />
                            <Picker.Item label="Médio" value="Médio" />
                            <Picker.Item label="Grande" value="Grande" />
                        </Picker>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: "center", marginBottom: 30 }}>
                    <Text style={styles.text}>Digite a idade do pet</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a idade do pet"
                        value={idade}
                        onChangeText={(texto) => setIdade(texto)}
                    />
                </View>
            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: "#1d75cd" }]}
                    onPress={alterarDados, () => navigation.navigate('Listar Pet')}
                >
                    <Text style={styles.botaoText}>Alterar</Text>
                </TouchableOpacity>
            </View>


        </ScrollView>
    );
}

//css
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        backgroundColor: "#4F7063",
        fontSize: 50,
        height: 80,
        textAlignVertical: 'center',
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
});