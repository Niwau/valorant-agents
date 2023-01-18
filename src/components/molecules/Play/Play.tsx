import { Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { styles } from './styles';

export default function Play() {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.container}>
      <Icon name='caretright' color='white' size={24}/>
      <Text style={styles.text}>REPRODUZIR FALA</Text>
    </TouchableOpacity>
  )
}
