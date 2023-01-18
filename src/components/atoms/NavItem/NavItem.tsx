import { useContext } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'
import { AgentsContext } from '../../../contexts/AgentsContext'
import { Role } from '../../../types/Role'

interface NavItemProps {
  name: Role
}

export default function NavItem({ name }: NavItemProps) {

  const { setSelectedRole, selectedRole } = useContext(AgentsContext)

  return (
    <TouchableWithoutFeedback onPress={() => setSelectedRole(name)}>
      <Text style={selectedRole == name ? styles.navTextActive : styles.navTextInactive}>{name.toUpperCase()}</Text>
    </TouchableWithoutFeedback>
  )
}

