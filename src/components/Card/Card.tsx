import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native'
import { ICard } from '../../types/Card'

export const Card = ({ agentImage, agentName, agentRole, bgImage, color }: ICard) => {
  return (
    <ImageBackground style={{ backgroundColor: `#${color}`, ...styles.container }} imageStyle={{ opacity: 0.2 }} source={{ uri: bgImage }}>
      <View style={{ top: -60, flex: 1 }}>
        <Image style={{ flex: 1 }} source={{ uri: agentImage }}/>
        <Text style={styles.role}>{ agentRole }</Text>
        <Text style={styles.name}>{ agentName }</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    borderRadius: 15,
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