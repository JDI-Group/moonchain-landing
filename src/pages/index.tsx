import { If } from '@hairy/react-lib'
import { Button } from '@heroui/react'
import { AnimatePresence } from 'framer-motion'
import Marquee from 'react-fast-marquee'
import { useWindowScroll } from 'react-use'
import { Head } from '@/layouts/components/head'
import { Navbar } from '@/layouts/components/navbar'

export default function IndexPage() {
  const scroll = useWindowScroll()

  function onMouse() {
    window.scrollTo({ top: document.body.clientHeight, behavior: 'smooth' })
  }
  return (
    <layouts.default>
      <div className="h-screen relative flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_black_0%,_transparent_20%,_transparent_80%,_black_100%)] z-[1]" />
        <video src="/videos/home-video.mp4" autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 z-0" />
        <img src="/images/home/mark.png" alt="home/mark" className="w-full h-full object-cover absolute top-0 left-0" />
        <div className="mx-auto container relative z-10">
          <Head />
          <Navbar />
        </div>
        <div className="flex-1 flex items-center container mx-auto">
          <div className="flex flex-col z-10 relative">
            <div className="text-4xl mb-4">
              <span className="font-spacex">MOONCHAIN</span>
              <span className="text-2xl"> | Ethereum 3.0</span>
            </div>
            <div className="text-8xl font-bold mb-10">
              <p>ETHEREUM’S FIRST</p>
              <p>HARDWARE CHAIN</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="w-[120px]" radius="none" color="primary">
                Github
              </Button>
              <Button size="lg" className="w-[120px] border-[#F8FAFC] hover:border-primary hover:text-primary" radius="none" variant="bordered">
                Docs
              </Button>
              <Button size="lg" className="w-[120px] border-[#F8FAFC] hover:border-primary hover:text-primary" radius="none" variant="bordered">
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
      <div className="h-screen relative flex">
        <div className="flex-1 -mr-[150px] flex justify-end items-center">
          <div className="inline-flex flex-col">
            <div className="text-8xl font-bold mb-4">
              <p>INITIAL HARDWARE</p>
              <p>OFFERING (IHO)</p>
            </div>
            <div className="text-2xl mb-10">
              The Future of Hardware Mining is FREE!
            </div>
            <Button size="lg" className="w-[160px] border-[#F8FAFC] hover:border-primary hover:text-primary" radius="none" variant="bordered">
              SEE DETails
            </Button>
          </div>
        </div>
        <div className="flex-1 py-20 flex items-center">
          <div className="w-full">
            <HomeFloatProjectsUnline />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center mb-[50px]">
        <div className="text-5xl font-bold mb-[12px]">ECOSYSTEM</div>
        <div className="text-xl text-center mb-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <Button size="lg" className="w-[160px] border-[#F8FAFC] hover:border-primary hover:text-primary" radius="none" variant="bordered">
          SEE DETails
        </Button>
      </div>
      <div className="relative overflow-x-clip pt-24 pb-12">
        <Marquee className="transform rotate-[4deg]">
          <div className="w-[120vw] h-[140px]  border-t-2 border-b-2 border-dashed border-primary bg-[rgba(210,241,89,0.20)]" />
        </Marquee>
        <Marquee className="absolute! top-0 bottom-0 m-auto bg-primary h-[140px]" direction="right">
          <div className="w-[120vw] h-[140px]">

          </div>
        </Marquee>
      </div>
    </layouts.default>
  )
}
