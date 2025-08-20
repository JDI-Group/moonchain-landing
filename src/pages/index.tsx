import { If, useStore } from '@hairy/react-lib'
import { redirectTo } from '@hairy/utils'
import { Button } from '@heroui/react'
import { AnimatePresence } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { useWindowScroll } from 'react-use'
import { Head } from '@/layouts/components/head'
import { Navbar } from '@/layouts/components/navbar'

export default function IndexPage() {
  const scroll = useWindowScroll()
  const router = useRouter()
  const config = useStore(store.config)
  const ecosystem = config.ecosystem.flatMap(item => item.items.map(item => item.icon))
  async function onMouse() {
    window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' })
  }
  return (
    <layouts.home>
      <div className="h-screen relative flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_black_0%,_transparent_20%,_transparent_80%,_black_100%)] z-[1]" />
        <video src="/videos/home-video.mp4" autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 z-0" />
        <img src="/images/home/mark.png" alt="home/mark" className="w-full h-full object-cover absolute top-0 left-0" />
        <div className="mx-auto container relative z-10">
          <Head />
          <Navbar />
        </div>
        <div className="px-6 lg:px-0 flex-1 flex items-end pb-[20vh] lg:pb-[30vh] container mx-auto">
          <div className="flex flex-col z-10 relative">
            <div className="mb-4">
              <span className="text-lg lg:text-xl font-spacex">MOONCHAIN</span>
              <span className="mx-4 text-sm lg:text-xl">|</span>
              <span className="text-sm">Ethereum 3.0</span>
            </div>
            <div className="text-5xl lg:text-[5rem] font-bold mb-10">
              <p>The Value Layer for ZK</p>
              {/* <p>HARDWARE CHAIN</p> */}
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                className="flex-1 lg:flex-none lg:w-[120px]"
                radius="none"
                color="primary"
                onPress={() => redirectTo('https://github.com/JDI-Group')}
              >
                Github
              </Button>
              <Button
                size="lg"
                className="flex-1 lg:flex-none lg:w-[120px] border-[#F8FAFC] hover:border-primary hover:text-primary"
                radius="none"
                variant="bordered"
                onPress={() => redirectTo('https://docs.mchain.ai/')}
              >
                Docs
              </Button>
              <Button
                size="lg"
                className="flex-1 lg:flex-none lg:w-[120px] border-[#F8FAFC] hover:border-primary hover:text-primary"
                radius="none"
                variant="bordered"
                onPress={() => redirectTo('https://mxc1usd.com/')}
              >
                Wallet
              </Button>
            </div>
          </div>
        </div>
        <If cond={scroll.y < 100} tag={AnimatePresence}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full flex justify-center bottom-20 z-10"
          >
            <Mouse className="cursor-pointer" onClick={onMouse} />
          </motion.div>
        </If>
      </div>
      <div className="h-screen relative flex flex-col justify-center md:justify-start md:flex-row px-6 lg:px-0">
        <div className="flex md:flex-1 lg:justify-end items-center">
          <div className="inline-flex flex-col">
            <div className="text-4xl xxl:text-7xl font-bold mb-4">
              <p>INITIAL HARDWARE</p>
              <p>OFFERING (IHO)</p>
            </div>
            <div className="text-xl md:text-2xl mb-8 md:mb-10">
              The Future of Hardware Mining is FREE!
            </div>
            <Button
              className="w-[160px] border-[#F8FAFC] hover:border-primary hover:text-primary"
              size="lg"
              variant="bordered"
              radius="none"
            >
              See Details
            </Button>
          </div>
        </div>
        <div className="md:flex-1 md:py-20 flex items-center lg:mr-40">
          <div className="w-full">
            <HomeFloatProjectsUnline />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center mb-[50px]">
        <div className="text-5xl font-bold mb-[12px]">ECOSYSTEM</div>
        <div className="text-xl text-center mb-[40px]">
          Welcome to the Moonchain Ecosystem.A growing universe of partners, builders, and innovators.Together, we are building the unified future of decentralized AI.
        </div>
        <Button
          className="w-[160px] border-[#F8FAFC] hover:border-primary hover:text-primary"
          onPress={() => router.push('/ecosystem')}
          variant="bordered"
          radius="none"
          size="lg"
        >
          See Details
        </Button>
      </div>
      <div className="relative overflow-x-clip pt-24 pb-24">
        <Marquee className="transform rotate-[4deg]" direction="right">
          <div className="w-[120vw] h-[140px]  border-t-2 border-b-2 border-dashed border-primary bg-[rgba(210,241,89,0.20)]" />
        </Marquee>
        <Marquee className="absolute! top-0 bottom-0 m-auto bg-primary h-[140px]">
          <div className="min-w-screen flex justify-between gap-14 pr-[max(1vw,24px)]">
            {ecosystem.map(item => (
              <img src={item} key={item} alt="ecosystem" className="w-[72px] h-[72px]" />
            ))}
          </div>
        </Marquee>
      </div>
    </layouts.home>
  )
}
