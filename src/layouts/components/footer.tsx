export function Footer() {
  const links = [
    {
      label: 'Twitter',
      icon: <TwitterIcon size={42} />,
      href: 'https://x.com/Moonchain_com',
    },
    {
      label: 'Telegram',
      icon: <TelegramIcon size={42} />,
      href: 'https://x.com/Moonchain_com',
    },
    {
      label: 'Youtube',
      icon: <YoutubeIcon size={42} />,
      href: 'https://x.com/Moonchain_com',
    },
    {
      label: 'Medium',
      icon: <MediumIcon size={42} />,
      href: 'https://x.com/Moonchain_com',
    },
  ]
  return (
    <div className="bg-[#0E0E0E] mt-24">
      <footer className="container mx-auto flex flex-wrap gap-4 justify-between items-center py-[48px] px-6 lg:px-0">
        <div className="pr-10">
          <p className="font-bold font-spacex mb-2">MOONCHAIN</p>
          <p className="text-white opacity-50">© 2025 Moonchain. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          {links.map(link => (
            <a className="bg-white/10 rounded-full hover:bg-primary hover:text-black transition-all duration-200" href={link.href} key={link.label} target="_blank">
              {link.icon}
            </a>
          ))}
        </div>
      </footer>
    </div>

  )
}
