import React, { createContext, useState, useEffect, useCallback } from 'react'
import { IAgentsContext } from '../types/IAgentsContext';
import { Role } from '../types/Role';
import { IAgent } from '../types/IAgent';
import { Children } from '../types/Children';
import { api } from '../services/api';

export const AgentsContext = createContext<IAgentsContext>({} as IAgentsContext );

export const AgentsContextProvider = ({ children } : Children) => {

  const [selectedRole, setSelectedRole] = useState<Role>({} as Role);
  const [agents, setAgents] = useState<IAgent[] | []>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredAgents, setFilteredAgents] = useState<IAgent[]>([]);

  useEffect(() => {
    const getAgents = async () => {
      try {
        const response = await api.get('/agents?language=pt-BR&isPlayableCharacter=true')
        setAgents(response.data.data)
        setIsLoaded(true)
        setSelectedRole('Duelista')
      } 
      catch (error) {
        setIsLoaded(false)
        console.log(error)
      }
    }
    getAgents()
  }, [])

  useEffect(() => {
    setFilteredAgents(agents.filter(agent => agent.role.displayName == selectedRole))
  }, [selectedRole])

  return (
    <AgentsContext.Provider value={{ agents, isLoaded, setSelectedRole, selectedRole, filteredAgents }}>
      { children }
    </AgentsContext.Provider>
  )
}
