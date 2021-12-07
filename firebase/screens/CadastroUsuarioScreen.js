import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Input, Header } from 'react-native-elements';

export default class Cadastro extends React.Component{
    render(){
        return(
          <View style={styles.container}>
            <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
          <Text style={styles.texto}>Usuario</Text>
          <Input style={styles.login} placeholder='Nome'/>
          <Input style={styles.login} placeholder='CPF'/>
          <Input style={styles.login} placeholder='Email'/>
          <Input style={styles.login} placeholder='Senha'/>
          <Button style={styles.botao} title="Salvar"/>

            <StatusBar style="auto" />
            </View>
        );
    }
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