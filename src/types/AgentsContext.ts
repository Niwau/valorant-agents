import { IAgent } from "./Agent"
import { Role } from "./Role"

export interface IAgentsContext {
  selectedRole: Role
  agents: IAgent[]
  isLoaded: boolean
  setSelectedRole: (role: Role ) => void
  filteredAgents: IAgent[]
}
