import { Image, TouchableOpacity, View } from 'react-native'
import { styles } from './styles';

interface SkillProps {
  isActive: boolean;
  displayIcon: string;
  onPress: () => void
}

export default function Skill({ isActive, displayIcon, onPress }: SkillProps) {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={isActive ? styles.containerActive : styles.container }>
        <Image source={{ uri: displayIcon }} style={{ width: 47, height: 47 }}/>
      </View>
    </TouchableOpacity>
  )
}
