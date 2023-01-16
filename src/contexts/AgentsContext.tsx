import React, { createContext, useState, useEffect } from 'react'

export interface IAgent {
  uuid: string
  displayName: string
  fullPortrait: string
  description: string
  background: string
  backgroundGradientColors: string[4]
  role: {
    displayName: string
  }
}

interface IAgentsContext {
  agents: IAgent[]
  isLoaded: boolean
}

export const AgentsContext = createContext<IAgentsContext>({} as IAgentsContext );

export const AgentsContextProvider = ({ children } : { children: React.ReactNode }) => {

  const [agents, setAgents] = useState<IAgent[] | []>([]);
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true')
    .then(res => res.json())
    .then(data => setAgents(data.data))
    .finally(() => setIsLoaded(true))
  }, [])

  return (
    <AgentsContext.Provider value={{ agents, isLoaded }}>
      { children }
    </AgentsContext.Provider>
  )
}
