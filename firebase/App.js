import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CadastroUsuarioScreen from './screens/CadastroUsuarioScreen';
import LoginScreen from './screens/LoginScreen';
import ListaDeContatosScreen from './screens/ListaDeContatosScreen';
import CadastroContatoScreen from './screens/CadastroContatoScreen'
import { initializeApp } from "firebase/app";
import { Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Header } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Stack = createNativeStackNavigator();

export default function App() {

const [email,setEmail] = useState("");
const [senha,setSenha] = useState("");

const firebaseConfig = {
  apiKey: "AIzaSyC5eS2PABxdGKK95jFyM2v1_-mdGHrLhBg",
  authDomain: "atividade-11150.firebaseapp.com",
  projectId: "atividade-11150",
  storageBucket: "atividade-11150.appspot.com",
  messagingSenderId: "5910938481",
  appId: "1:5910938481:web:d2ccb7c89eaee61a5dacd0",
  measurementId: "${config.measurementId}"
};

function loginFirebase() {
  const auth = getAuth();
signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    console.log("conectado");
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("não conectado");
  }); 
}

function cadastroUsuarioFirebase () {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      console.log("cadastrado");
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("não cadastrado");
    });
}

const app = initializeApp(firebaseConfig);
  
  return (
    
      <View style={styles.container}>
          <Header leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }} centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }} rightComponent={{ icon: 'home', color: '#fff' }}/>
                <Text style={styles.texto}>Login</Text>
                <Input style={styles.login} placeholder='Email' leftIcon={
                  <Icon
                    name='at'
                    size={24}
                    color='black'
                  />
                }
                value={email}
                onChangeText={email => setEmail(email)}
                />
                <Input secureTextEntry={true} style={styles.login} placeholder='Senha' leftIcon={
                  <Icon
                    name='unlock-alt'
                    size={24}
                    color='black'
                  />
                }
                value={senha}
                onChangeText={senha => setSenha(senha)}
                />
                <Button style={styles.botao} title="Login" 
                onPress={() => {loginFirebase()}}
                />
                <Button style={styles.botao} title="Cadastro Usuario" 
                onPress={() => {cadastroUsuarioFirebase()}}
                />
                 <Text>{email}</Text>
                 <Text>{senha}</Text>
            <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    botao: {
      flex: 3,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    login: {
      flex: 3,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});