import React from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Feather from "react-native-vector-icons/Feather";


export default function Listagem_protetor({ data, deleteItem, editItem}) {
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.text}>ID: {data.id}</Text>
            <Text style={styles.text}>Telefone: {data.telefone}</Text>
            <Text style={styles.text}>Cargo: {data.cargo}</Text>
            <Text style={styles.text}>Nome: {data.nome}</Text>
            <Text style={styles.text}>Sobrenome: {data.sobrenome}</Text>
            <Text style={styles.text}>Rua: {data.rua}</Text>
            <Text style={styles.text}>Numero: {data.numero}</Text>
            <Text style={styles.text}>Bairro: {data.bairro}</Text>
            <Text style={styles.text}>Cidade: {data.cidade}</Text>
            <Text style={styles.text}>Uf: {data.uf}</Text>
            <Text style={styles.text}>Data_Nasc: {data.data_nasc}</Text>
            <Text style={styles.text}>User: {data.user}</Text>

        </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity 
                style={[styles.botao, { backgroundColor: "#B22222" }]} 
                onPress={() => deleteItem(data.id)}>
                    <Text style={styles.botaoText}>Deletar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.botao, { backgroundColor: "#191970" }]}
                    onPress={() => editItem()}
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
        backgroundColor: '#121212',
        borderRadius: 20,
        opacity: 0.8,
    },
    text: {
        color: '#FFF', fontSize: 17

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
        fontSize: 22,
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
