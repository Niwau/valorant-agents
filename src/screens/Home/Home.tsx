import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Image, StatusBar, FlatList, Text, ScrollView, ActivityIndicator } from 'react-native'
import { Nav } from '../../components/Nav/Nav';
import Card from '../../components/Card/Card';
import { AgentsContext, IAgent } from '../../contexts/AgentsContext';


export const Home = () => {

  const { agents, isLoaded } = useContext(AgentsContext)

  const CardList = 
    <FlatList 
      horizontal 
      data={agents} 
      renderItem={ ({ item }) => (
        <Card 
          colors={item.backgroundGradientColors}
          agentRole={item.role.displayName}
          bgImage={item.background}
          agentImage={item.fullPortrait}
          agentName={item.displayName}
        />
      )} 
      keyExtractor={item => item.uuid}
    />

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#14171F'/>
      <Image source={require('../../../assets/valorant-logo.png')}/>
      <Nav/>
      { !isLoaded ? <ActivityIndicator/> : CardList }
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
