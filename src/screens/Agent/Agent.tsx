import { View, Text, ScrollView } from 'react-native'
import { Card } from '../../components/molecules/Card/Card'
import Tag from '../../components/molecules/Tag/Tag'
import Skill from '../../components/molecules/Skill/Skill'
import Play from '../../components/molecules/Play/Play'
import { styles } from './styles'
import { useAgent } from '../../hooks/useAgent'

export const Agent = () => {

  const { color, selectedAgent, selectedSkill, setSelectedSkill } = useAgent();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{...styles.cardContainer, backgroundColor: color }}>
        <Card {...selectedAgent!} role={selectedAgent?.role.displayName!} color={color}/>
      </View>
      <View style={styles.tagsContainer}>
        {
          selectedAgent?.characterTags?.map((tag, index) => <Tag key={index} color={color} name={tag}/>)
        }
      </View>
      <View style={{...styles.sectionContainer, marginRight: 32}}>
        <Text style={styles.title}>DESCRIÇÃO</Text>
        <Text style={styles.content}>{selectedAgent?.description}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>HABILIDADES</Text>
        <ScrollView horizontal contentContainerStyle={styles.skillsContainer}>
          { 
            selectedAgent?.abilities!.map(skill => {
              return (
                <Skill 
                  {...skill} 
                  key={skill.slot} 
                  onPress={() => setSelectedSkill({...skill })} 
                  isActive={skill.displayName == selectedSkill.displayName ? true : false}/>
              )
            }) 
          }
        </ScrollView>
      </View>
      <View style={{...styles.sectionContainer, marginRight: 32}}>
        <Text style={styles.title}>{selectedSkill.displayName}</Text>
        <Text style={styles.content}>{selectedSkill.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Play/>
      </View>
    </ScrollView>
  )
}
