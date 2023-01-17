export interface IAgent {
  uuid: string
  displayName: string
  fullPortrait: string
  description: string
  background: string
  backgroundGradientColors: string[]
  role: {
    displayName: string
  }
  characterTags: null | string[]
  abilities: [
    {
      slot: string
      displayName: string
      description: string
      displayIcon: string
    }
  ]
  voiceline: {
    medialist: [
      {
        wave: string
      }
    ]
  }
}
