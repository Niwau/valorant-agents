import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image, StatusBar, FlatList, Text, ScrollView, ActivityIndicator } from 'react-native'
import { Nav } from '../../components/Nav/Nav';
import Card from '../../components/Card/Card';

interface IAgent {
  uuid: string
  displayName: string
  fullPortrait: string
  description: string
  background: string
  backgroundGradientColors: string[4]
  role: {
    displayName: string
  }
}

export const Home = () => {

  const [agents, setAgents] = useState<IAgent[] | []>([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true')
    .then(res => res.json())
    .then(data => setAgents(data.data))
    .finally(() => setIsLoaded(true))
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#14171F'/>
      <Image source={require('../../../assets/valorant-logo.png')}/>
      <Nav/>
      { !isLoaded ? <ActivityIndicator/> : (
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
      )}
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
