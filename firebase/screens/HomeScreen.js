import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
// import { Input, Header } from 'react-native-elements';

export default class Home extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.texto}>Home</Text>
                <Button style={styles.botao} title="Ir para Cadastro" onPress={
                () => this.props.navigation.navigate('Cadastro')
                 }/>
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
  });