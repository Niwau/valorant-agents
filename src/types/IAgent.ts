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
