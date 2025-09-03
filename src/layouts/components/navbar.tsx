import { redirectTo } from '@hairy/utils'
import {
  Button,
  Navbar as HeroUINavbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { link as linkStyles } from '@heroui/theme'
import clsx from 'clsx'
import NextLink from 'next/link'
import { siteConfig } from '@/config/site'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  function renderMenuItem(item: any, index: number) {
    return (
      <NavbarMenuItem className="py-3 leading-0" key={`${item}-${index}`}>
        <Link
          color={router.pathname === item.href ? 'primary' : 'foreground'}
          href={item.disabled ? '#' : item.href}
          className={clsx(
            'font-bold',
            item.disabled ? 'cursor-not-allowed text-white/40' : '',
            router.pathname === item.href && !item.disabled ? 'border-b border-primary' : '',
          )}
        >
          {item.label}
        </Link>
      </NavbarMenuItem>
    )
  }
  function renderNavItem(item: any, index: number) {
    return (
      <NavbarItem key={index}>
        <NextLink
          className={clsx(
            linkStyles({ color: 'foreground' }),
            item.disabled && 'text-white/40',
            !item.disabled && 'hover:text-[#D2F159]',
            !item.disabled && router.pathname === item.href && 'text-[#D2F159]!',
          )}
          color="foreground"
          href={item.disabled ? '#' : item.href}
        >
          {item.label}
        </NextLink>
      </NavbarItem>
    )
  }

  return (
    <HeroUINavbar
      className={clsx('px-6 lg:px-0 transition-colors duration-800 bg-transparent backdrop-blur-none h-[90px] lg:h-[100px] relative z-10', isMenuOpen && 'bg-black')}
      classNames={{ wrapper: 'px-0' }}
      style={{ backdropFilter: 'inherit' }}
      maxWidth="full"
      position="static"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-3" href="/">
            <img src="/images/logo-white.png" className="size-[40px] inline! flex-shrink-0" />
            <p className="font-bold font-spacex hidden lg:block">MOONCHAIN</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full" justify="center">
        <div className="hidden lg:flex gap-4 justify-start ml-2 font-bold">
          {siteConfig.navItems.map((item: any, index) => item.children
            ? renderNavItem(item, index)
            : renderNavItem(item, index),
          )}
        </div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden md:flex gap-2">
          <Button className="w-[120px] border-[#F8FAFC] hover:border-primary hover:text-primary font-bold uppercase" radius="none" variant="bordered" onPress={() => redirectTo('https://github.com/JDI-Group')}>
            Wallet
          </Button>
          <Button className="w-[120px] hover:bg-[#C7E555] hover:opacity-100! font-bold uppercase" radius="none" color="primary" onPress={() => redirectTo('https://docs.mchain.ai/')}>
            Github
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle icon={isMenuOpen ? <CloseIcon className="flex-shrink-0" size={40} /> : <MenuIcon className="flex-shrink-0" size={40} />} onChange={setIsMenuOpen} />
      </NavbarContent>

      <NavbarMenu className="bg-black px-0">
        <div className="mx-5 pt-2 border-t border-white/30 flex flex-col flex-1">
          {siteConfig.navMenuItems.map((item: any, index) => (
            item.children
              ? (
                  <div className="border-t border-white/30 mt-[10px] pt-[10px]" key={`${item}-${index}`}>
                    {item.children.map(renderMenuItem)}
                  </div>
                )
              : renderMenuItem(item, index)
          ))}
        </div>
        <div className="mx-5 mb-8 flex gap-[10px]">
          <Button
            size="lg"
            className="flex-1 lg:flex-none lg:w-[120px] font-bold uppercase"
            radius="none"
            color="primary"
            onPress={() => redirectTo('https://github.com/JDI-Group')}
          >
            Github
          </Button>
          <Button
            size="lg"
            className="flex-1 border-[#F8FAFC] hover:border-primary hover:text-primary font-bold uppercase"
            radius="none"
            variant="bordered"
            onPress={() => redirectTo('https://docs.mchain.ai/')}
          >
            Docs
          </Button>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
