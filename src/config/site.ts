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
// const moreItems = [
//   {
//     label: 'Swap Info',
//     href: 'https://swap-info.moonchain.com/',
//   },
//   {
//     label: 'NFT',
//     href: 'https://nft.moonchain.com/',
//   },
//   {
//     label: 'Mining',
//     href: 'https://miningv2.matchx.io/',
//   },
//   {
//     label: 'Disco Distro',
//     href: 'https://discodistro.vercel.app/',
//   },
//   {
//     label: 'Explorer',
//     href: 'https://explorer.moonchain.com/',
//   },
//   {
//     label: 'DepInscriptions',
//     href: 'https://depinscriptions.moonchain.com/',
//   },
//   {
//     label: 'Airdrop',
//     href: 'https://airdrop.moonchain.com/',
//   },
// ]

export const siteConfig = {
  name: `The Value Layer for ZK`,
  description: 'The Value Layer for ZK',
  navItems: [
    {
      label: 'IHO',
      href: 'https://iho.mchain.ai/products',
    },
    {
      label: 'APP',
      href: '/app',
    },
    {
      label: 'EXPLORER',
      href: 'https://explorer.mchain.ai',
    },
    {
      label: 'SWAP',
      href: '/',
      disabled: true,
    },
    {
      label: 'BRIDGE',
      href: '/',
      disabled: true,
      // children: []
    },
  
    // {
    //   label: 'MORE',
    //   children: moreItems,
    // },
  ],
  navMenuItems: [
    {
      label: 'IHO',
      href: 'https://iho.mchain.ai/products',
    },
    {
      label: 'APP',
      href: '/app',
    },
    {
      label: 'EXPLORER',
      href: 'https://explorer.mchain.ai',
    },
    {
      label: 'SWAP',
      href: '/',
      disabled: true,
    },
    {
      label: 'BRIDGE',
      href: '/',
      disabled: true,
      // children: []
    },
    // {
    //   label: 'MORE',
    //   children: moreItems,
    // },
  ],
  links: {
    github: 'https://github.com/heroui-inc/heroui',
    twitter: 'https://twitter.com/hero_ui',
    docs: 'https://heroui.com',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
}
