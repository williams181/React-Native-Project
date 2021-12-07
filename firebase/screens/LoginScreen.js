import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Header } from 'react-native-elements';

export default class Login extends React.Component{
    render(){
        return(
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
                // value={email}
                // onChangeText={email => setEmail(email)}
                />
                <Input secureTextEntry={true} style={styles.login} placeholder='Senha' leftIcon={
                  <Icon
                    name='unlock-alt'
                    size={24}
                    color='black'
                  />
                }
                // value={senha}
                // onChangeText={senha => setSenha(senha)}
                />
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
      // login: {
      //   flex: 3,
      //   backgroundColor: '#fff',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // },
  });