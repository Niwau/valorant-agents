import { View, Text } from 'react-native'
import { styles } from './styles'

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