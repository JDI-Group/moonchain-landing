export type SiteConfig = typeof siteConfig

// Swap Info
// NFT
// MNS
// Stable Coin
// Mining
// Disco Distro
// Explorer
// DepInscriptions
// Airdrop
const moreItems = [
  {
    label: 'Swap Info',
    href: '/swap-info',
  },
  {
    label: 'NFT',
    href: '/nft',
  },
  {
    label: 'Mining',
    href: '/mining',
  },
  {
    label: 'Disco Distro',
    href: '/disco-distro',
  },
  {
    label: 'Explorer',
    href: '/explorer',
  },
  {
    label: 'DepInscriptions',
    href: '/dep-inscriptions',
  },
  {
    label: 'Airdrop',
    href: '/airdrop',
  },
]

export const siteConfig = {
  name: 'Next.js + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'IHO',
      href: '/',
    },
    {
      label: 'SWAP',
      href: '/swap',
    },
    {
      label: 'BRIDGE',
      href: '/bridge',
    },
    {
      label: 'MORE',
      children: moreItems,
    },
  ],
  navMenuItems: [
    {
      label: 'IHO',
      href: '/iho',
    },
    {
      label: 'SWAP',
      href: '/swap',
    },
    {
      label: 'BRIDGE',
      href: '/bridge',
    },
    {
      label: 'MORE',
      children: moreItems,
    },
  ],
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
}
