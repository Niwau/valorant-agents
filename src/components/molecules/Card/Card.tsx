import { Image, Text, View, ImageBackground } from 'react-native'
import { CardProps } from '../../../types/CardProps'
import { styles } from './styles'

export const Card = ({ fullPortrait, displayName, role, background, color }: CardProps) => {
  return (
    <ImageBackground style={{ backgroundColor: `#${color}`, ...styles.container }} imageStyle={{ opacity: 0.2 }} source={{ uri: background }}>
      <View style={styles.content}>
        <Image style={{ flex: 1 }} source={{ uri: fullPortrait }}/>
        <Text style={styles.role}>{ role }</Text>
        <Text style={styles.name}>{ displayName }</Text>
      </View>
    </ImageBackground>
  )
}