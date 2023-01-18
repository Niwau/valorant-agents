import React from 'react'
import { ScrollView } from 'react-native'
import { IAgent } from '../../../types/Agent'
import { styles } from './styles'
import Skill from '../../molecules/Skill/Skill'

interface Skill {
  displayName: string;
  displayIcon: string;
  description: string;
  slot: string;
}

interface SkillList {
  agent: IAgent
  setSelectedSkill: (skill: Skill) => void
  selectedSkill: string
}

export const SkillList = ({ agent, setSelectedSkill, selectedSkill }: SkillList ) => {

  return (
    <ScrollView horizontal contentContainerStyle={styles.skillsContainer}>
      { 
        agent?.abilities!.map(skill => {
          return (
            <Skill 
              {...skill} 
              key={skill.slot} 
              onPress={() => setSelectedSkill({ ...skill })} 
              isActive={skill.displayName == selectedSkill  ? true : false}
            />
          )
        }) 
      }
    </ScrollView>
  )
}
