import { View, StyleSheet, Text, ScrollView, Button } from 'react-native'
import { AgentScreenProps } from '../../../App'
import { useContext, useState, useEffect } from 'react'
import { AgentsContext } from '../../contexts/AgentsContext'
import { IAgent } from '../../types/Agent'
import { Card } from '../../components/Card/Card'
import Tag from '../../components/Tag/Tag'
import Skill from '../../components/Skill/Skill'
import Play from '../../components/Play/Play'

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

  const Skills = selectedAgent?.abilities.map(skill => (
    <Skill key={skill.slot} name={skill.displayName} image={skill.displayIcon} isActive={false}/>
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
      <View style={{...styles.sectionContainer, marginRight: 32}}>
        <Text style={styles.title}>DESCRIÇÃO</Text>
        <Text style={styles.content}>{selectedAgent?.description}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>HABILIDADES</Text>
        <ScrollView horizontal contentContainerStyle={styles.skillsContainer}>
          { Skills }
        </ScrollView>
      </View>
      <View style={{...styles.sectionContainer, marginRight: 32}}>
        <Text style={styles.title}>{selectedAgent?.abilities[0].displayName}</Text>
        <Text style={styles.content}>{selectedAgent?.abilities[0].description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Play/>
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
    minHeight: 750,
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
    marginBottom: 8,
  },
  content: {
    color: 'white',
    letterSpacing: 1.5,
    fontSize: 16,
    fontWeight: '300',
  },
  sectionContainer: {
    marginLeft: 32,
    marginVertical: 16,
    flex: 1,
  },
  skillsContainer: {
    marginTop: 8,
  },
  buttonContainer: {
    margin: 32,
  }
})
