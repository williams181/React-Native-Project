import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { Input, Header, ListItem, Avatar  } from 'react-native-elements';

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
]

export default class listaContato extends React.Component{
    render(){
        return(
          <View>
            <Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
            {
              list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar source={{uri: l.avatar_url}} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                </ListItem>
              ))
            }
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