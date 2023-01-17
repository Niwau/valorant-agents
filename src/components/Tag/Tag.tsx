import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ITag {
  name: string
  color: string
}

export default function Tag({ name, color }: ITag) {
  return (
    <View style={{ ...styles.container, borderColor: color }}>
      <Text style={{ color: color, ...styles.text }}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderStyle: 'solid',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 5,
      marginRight: 8,
    },
    text: {
      fontSize: 14,
    }
})