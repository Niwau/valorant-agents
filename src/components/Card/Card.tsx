import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

interface ICard {
  agentName: string
  agentRole: string
  bgImage: string
  colors: string[4]
  agentImage: string
}

export default function Card({ agentImage, agentName, agentRole, bgImage, colors }: ICard) {
  return (
    <ImageBackground style={{ backgroundColor: `#${colors[1]}`, ...styles.container }} imageStyle={{ opacity: 0.2 }} source={{ uri: bgImage }}>
      <View style={{ top: -60 }}>
        <Image style={styles.agent} source={{ uri: agentImage }}/>
        <Text style={styles.role}>{ agentRole.toUpperCase() }</Text>
        <Text style={styles.name}>{ agentName.toUpperCase() }</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    width: 300,
    marginRight: 8,
    borderRadius: 15,
  },
  agent: {
    flexBasis: 600,
    flex: 1,
  },
  role: {
    color: 'white',
    marginLeft: 32,
    fontSize: 16,
    fontWeight: '300',
    letterSpacing: 3,
  },
  name: {
    color: 'white',
    marginLeft: 32,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: 3,
  }
})