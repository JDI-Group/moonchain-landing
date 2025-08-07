import { defineStore } from '@hairy/react-lib'

interface Ecosystem {
  title: string
  description: string
  items: {
    title: string
    description: string
    icon: string
    link: string
  }[]
}

export const config = defineStore(
  {
    state: () => ({
      ecosystem: [] as Ecosystem[],
    }),
    actions: {
      async fetchEcosystem() {
        // const baseUrl = 'https://raw.githubusercontent.com/JDI-Group/moonchain-landing/refs/heads/main'
        const response = await fetch(`/ecosystem.json`, {
          headers: { 'Content-Type': 'application/json' },
        })
        const data = await response.json()
        return this.ecosystem = data
      },
    },
  },
  { persist: 'config' },
)
