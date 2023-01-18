import { ScrollView, View } from 'react-native'
import NavItem from '../../atoms/NavItem/NavItem'
import { styles } from './styles'

export const NavGroup = () => {

  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container} showsHorizontalScrollIndicator={false}>
        <NavItem name='Duelista'/>
        <NavItem name='Controlador'/>
        <NavItem name='Iniciador'/>
        <NavItem name='Sentinela'/>
      </ScrollView>
    </View>
  )
}

