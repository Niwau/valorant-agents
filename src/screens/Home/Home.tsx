import React from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native'
import { Nav } from '../../components/Nav/Nav';

export const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#14171F'/>
      <Image source={require('../../../assets/valorant-logo.png')}/>
      <Nav/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingLeft: 32,
    paddingBottom: 32,
    backgroundColor: '#14171F',
  },
});
