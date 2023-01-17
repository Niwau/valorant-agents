import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'

interface ISkill {
  name: string;
  isActive: boolean;
  image: string;
}

export default function Skill({ isActive, image, name }: ISkill) {

  return (
    <View style={isActive ? styles.containerActive : styles.container }>
      <Image source={{ uri: image }} style={{ width: 47, height: 47 }}/>
    </View>
  )
}

const styles = StyleSheet.create({ 
  container: {
    marginRight: 8,
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
  },
  containerActive: {
    marginRight: 8,
    flex: 1,
    padding: 12,
    backgroundColor: '#FA4454',
    borderRadius: 5,
    borderWidth: 1,
  },
  skillName: {
    color: 'white',
  }
})