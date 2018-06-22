import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header.js';
import AlbumList from './components/oldComponents/AlbumList.js'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <AlbumList />
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
})
