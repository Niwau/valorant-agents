import { useContext } from "react"
import { FlatList, TouchableOpacity } from "react-native"
import { AgentsContext } from "../../../contexts/AgentsContext"
import { Card } from "../../molecules/Card/Card"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { NavigationProps } from "../../../../App"

export const CardList = () => {

  const { filteredAgents } = useContext(AgentsContext)
  const { navigate } = useNavigation<NavigationProps>()

  return (
    <FlatList 
      horizontal 
      data={filteredAgents} 
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.touchable} activeOpacity={0.9} onPress={() => navigate('Agent', { uuid: item.uuid })}>
          <Card {...item} color={item.backgroundGradientColors[1]} role={item.role.displayName}/>
        </TouchableOpacity>
      )} 
      keyExtractor={item => item.uuid}
    />
  )
}