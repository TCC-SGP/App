import React,{useState} from 'react';
import {Image, ImageBackground, Keyboard, Text, TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";


export default function Login({navigation}) {

    const [user,setUser]=useState(null);
    const [password,setPassword]=useState(null);
    const [message,setMessage]=useState(null);

    //Fazer Login
    async function doLogin()
    {
        //onde está "192.168.100.93" coloque seu ipv4
        let reqs = await fetch('http://192.168.183.61/api_sgpApp/Controller.php',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password
            })
        });
        let ress = await reqs.json();
        Keyboard.dismiss();
       if(ress){
           navigation.navigate('Home');
       }else{
            setMessage('Usuário ou senha inválidos');
            setTimeout(()=>{
                setMessage(null);
            },3000);
       }
    }

    return (
        
            

                <ImageBackground 
                    source={require('../../assets/background.jpg')} 
                    style={styles.imgBackground}
                >

                    <View style={styles.container}>

                    <Text style={styles.txtLog}>Login</Text>

                        {message &&(
                            <Text style={styles.aviso}>{message}</Text>
                        )}
                    
                        <TextInput
                            style={styles.text}
                            placeholder="Usuário"
                            placeholderTextColor="#222"
                            autoCorrect={false}
                            onChangeText={(text)=>setUser(text)}
                        />
                    
                        <TextInput
                            style={styles.text}
                            placeholder="Senha"
                            placeholderTextColor="#222"
                            autoCorrect={false}
                            secureTextEntry={true}
                            onChangeText={(text)=>setPassword(text)}
                        />

                        <TouchableOpacity onPress={doLogin} style={styles.areaBtn}>
                            <Text style={styles.btnText}>Entrar</Text>
                        </TouchableOpacity>
                    </View> 

                
                </ImageBackground>
            
    );
}


const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        resizeMode: 'cover',
        backgroundColor: "#4F7063",
    },
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        width: '90%',
    },
    txtLog: {
        marginBottom:'10%',
        justifyContent: "center",
        color: "#222",
        fontSize: 50,
        height: '18%',
        marginTop: '5%',
    },
    aviso: {
        alignItems: "center",
        justifyContent: "center",
        width: '90%',
        color: "#222",
        fontSize: 40,
        marginBottom: '5%',
    },
    text: {
        width: '90%',
        marginBottom: 15,
        color: "#222",
        fontSize: 40,
        borderRadius: 30,
        padding: 10,
        borderColor: "#222",      
        borderWidth: 4,
        padding: 10,
    },
    areaBtn: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "#222",
        width: '30%',
        borderRadius: 15,
        borderWidth: 4,
        marginTop: '10%',
    },
    btnText: {
        fontSize: 30,
        color: "#222",
    },
});