import { useContext, useState, useEffect } from 'react'
import { AgentsContext } from "../contexts/AgentsContext";
import { IAgent } from '../types/Agent';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NavigationProps, StackParamList } from '../../App';

export const useAgent = () => {
  const { agents } = useContext(AgentsContext)
  
  const [selectedAgent, setSelectedAgent] = useState<IAgent>();
  const [selectedSkill, setSelectedSkill] = useState({ displayName: '', description: ''});
  const [color, setColor] = useState('');
  
  const { setOptions } = useNavigation<NavigationProps>()
  const route = useRoute<RouteProp<StackParamList, 'Agent'>>();

  const { uuid } = route.params
  
  useEffect(() => {
    const agent = agents.find(agent => agent.uuid == uuid)
    setSelectedAgent(agent)
    setColor(`#${agent?.backgroundGradientColors[1]!}`)
    setOptions({ statusBarColor: `#${agent?.backgroundGradientColors[1]!}` })
    setSelectedSkill({
      displayName: agent?.abilities[0].displayName!,
      description: agent?.abilities[0].description!
    })
  }, [])

  return { selectedAgent, selectedSkill, color, setSelectedSkill }

}