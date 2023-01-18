import { View, Text, ScrollView } from 'react-native'
import { Card } from '../../components/molecules/Card/Card'
import Play from '../../components/molecules/Play/Play'
import { styles } from './styles'
import { useAgent } from '../../hooks/useAgent'
import { TagList } from '../../components/organisms/TagList/TagList'
import { SkillList } from '../../components/organisms/SkillList/SkillList'

export const Agent = () => {

  const { color, selectedAgent, selectedSkill, setSelectedSkill } = useAgent();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{...styles.cardContainer, backgroundColor: color }}>
        <Card {...selectedAgent!} role={selectedAgent?.role.displayName!} color={color}/>
      </View>
      <TagList agent={selectedAgent!} color={color}/>
      <View style={{...styles.sectionContainer, marginRight: 32}}>
        <Text style={styles.title}>DESCRIÇÃO</Text>
        <Text style={styles.content}>{selectedAgent?.description}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.title}>HABILIDADES</Text>
        <SkillList agent={selectedAgent!} setSelectedSkill={setSelectedSkill} selectedSkill={selectedSkill.displayName}/>
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
