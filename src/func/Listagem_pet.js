import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";


export default function Listagem_pets({ data, deleteItem, editItem}) {

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.nomePet}>
                <Text style={styles.textNome}>{data.nome}</Text>
                </View>
                <Text style={styles.text}>Protetor: <Text style={styles.textDados}>   {data.protetor}</Text></Text>
                <Text style={styles.text}>Tipo: <Text style={styles.textDados}>   {data.tipo}</Text> </Text>
                <Text style={styles.text}>Raça: <Text style={styles.textDados}>   {data.raca}</Text> </Text>
                <Text style={styles.text}>Porte: <Text style={styles.textDados}>   {data.porte}</Text> </Text>
                <Text style={styles.text}>Idade: <Text style={styles.textDados}>   {data.idade}</Text> </Text>
            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity 
                style={[styles.botao, { backgroundColor: "#B22222" }]} 
                onPress={() => deleteItem(data.id)}>
                    <Text style={styles.botaoText}>Deletar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: "#191970" }]}
                    onPress={() => editItem(data)}
                >
                    <Text style={styles.botaoText}>Editar</Text>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center'}}>

            <View style={styles.barrinha}/>

            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, 
        marginStart: 8,
        marginEnd: 8,
        marginTop: 10,
        marginBottom: 5,
        padding: 10,
        backgroundColor: '#4F7063',
        borderRadius: 20,
    },
    nomePet: {
        marginStart:'25%',
        marginBottom:15,
    },
    textNome: {
        color: '#FFF', 
        fontSize: 35,
        fontWeight: 'bold',

    },
    text: {
        justifyContent: 'space-between',
        color: '#FFF', 
        fontSize: 23,
        marginTop: 10,
        marginBottom: 10,
        marginStart: 20

    },
    textDados:{
        fontSize: 30,

    },
    areaBtn: {
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 15,
        marginRight: 15,
        justifyContent: "space-between",
        marginTop: 10,
    },
    botao: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 5,
        width: 100,
    },
    botaoText: {
        fontSize: 20,
        color: "#FFF",
    },
    barrinha: {
        backgroundColor:"#fff",
        width:"80%",
        height: 7   ,
        marginTop:20,
        marginBottom:10,
        borderRadius:5,

    },
});