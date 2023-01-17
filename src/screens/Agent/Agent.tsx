import { View, StyleSheet, Text, ScrollView, StatusBar, FlatList } from 'react-native'
import { AgentScreenProps } from '../../../App'
import { useContext, useState, useEffect } from 'react'
import { AgentsContext } from '../../contexts/AgentsContext'
import { IAgent } from '../../types/Agent'
import { Card } from '../../components/Card/Card'
import Tag from '../../components/Tag/Tag'

export const Agent = ({ route, navigation }: AgentScreenProps) => {

  const { agents } = useContext(AgentsContext)
  const { uuid } = route.params

  const [selectedAgent, setSelectedAgent] = useState<IAgent>();

  useEffect(() => {
    const agent = agents.find(agent => agent.uuid == uuid)
    setSelectedAgent(agent)
    navigation.setOptions({ statusBarColor: `#${agent?.backgroundGradientColors[1]}` })
  }, [])

  const Tags = selectedAgent?.characterTags?.map(tag => (
    <Tag 
      key={tag} 
      color={`#${selectedAgent?.backgroundGradientColors[1]}`} 
      name={tag}
    />
  ))

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{...styles.cardContainer, backgroundColor: `#${selectedAgent?.backgroundGradientColors[1]}` }}>
        <Card
          agentImage={selectedAgent?.fullPortrait!}
          agentName={selectedAgent?.displayName!}
          agentRole={selectedAgent?.role.displayName!}
          bgImage={selectedAgent?.background!}
          color={selectedAgent?.backgroundGradientColors[1]!}
        />
      </View>
      <View style={styles.tagsContainer}>
        { Tags }
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>DESCRIÇÃO</Text>
        <Text style={styles.title}>{selectedAgent?.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#14171F',
  },
  cardContainer: {
    paddingTop: 64,
    width: '100%',
    height: '85%',
  },
  tagsContainer: {
    flexDirection: 'row', 
    marginHorizontal: 32,
    width: '100%',
    marginTop: 12,
  },
  title: {
    color: 'white',
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContainer: {
    marginLeft: 32,
    marginVertical: 32,
    flex: 1,
  }
})
