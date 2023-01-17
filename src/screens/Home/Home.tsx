import React, { useContext } from 'react'
import { View, StyleSheet, Image, StatusBar, FlatList, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import { Nav } from '../../components/Nav/Nav';
import { Card } from '../../components/Card/Card';
import { AgentsContext } from '../../contexts/AgentsContext';
import { HomeScreenProps } from '../../../App';

export const Home = ({ navigation }: HomeScreenProps) => {

  const { isLoaded, filteredAgents } = useContext(AgentsContext)

  const CardList = 
    <FlatList 
      horizontal 
      data={filteredAgents} 
      renderItem={ ({ item }) => (
        <TouchableOpacity style={styles.touchable} activeOpacity={0.9} onPress={() => navigation.navigate('Agent', { uuid: item.uuid })}>
          <Card 
            color={item.backgroundGradientColors[1]}
            agentRole={item.role.displayName}
            bgImage={item.background}
            agentImage={item.fullPortrait}
            agentName={item.displayName}
          />
        </TouchableOpacity>
      )} 
      keyExtractor={item => item.uuid}
    />

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor='#14171F'/>
      <Image source={require('../../../assets/valorant-logo.png')}/>
      <Nav/>
      { !isLoaded ? <ActivityIndicator/> : CardList }
    </ScrollView>
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
  touchable: {
    width: 300,
    marginRight: 8,
    marginTop: 32,
  }
});
