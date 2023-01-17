import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/AntDesign';

export default function Play() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <Icon name='caretright' color='white' size={24}/>
      <Text style={styles.text}>REPRODUZIR FALA</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: '#FA4454',
    borderRadius: 15,
  },
  text: {
    marginLeft: 8,
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  }
})