import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { IAgent } from '../../../types/Agent'
import Tag from '../../molecules/Tag/Tag'

interface TagListProps {
  agent: IAgent
  color: string
}

export const TagList = ({ agent, color }: TagListProps) => {
  return (
    <View style={styles.tagsContainer}>
      {
        agent?.characterTags?.map((tag, index) => <Tag key={index} color={color} name={tag}/>)
      }
    </View>
  )
}
