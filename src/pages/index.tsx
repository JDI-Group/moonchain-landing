import type { PropsWithDetailedHTML } from '@hairy/react-lib'
import { If } from '@hairy/react-lib'
import { redirectTo } from '@hairy/utils'
import { Button } from '@heroui/react'
import { AnimatePresence } from 'framer-motion'
import { useWindowScroll } from 'react-use'
import { Head } from '@/layouts/components/head'
import { Navbar } from '@/layouts/components/navbar'

export default function IndexPage() {
  const scroll = useWindowScroll()
  const router = useRouter()
  async function onMouse() {
    window.scrollTo({ top: document.body.clientHeight / 3, behavior: 'smooth' })
  }
  return (
    <layouts.home>
      <div className="h-screen relative flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_black_0%,_transparent_20%,_transparent_80%,_black_100%)] z-[1]" />
        <video src="/videos/home-video.mp4" playsInline muted preload="true" autoPlay loop className="w-full h-full object-cover absolute top-0 left-0 z-0" />
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
                onPress={() => router.push('app')}
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

      <div className="relative py-32 container mx-auto">
        {/* <div className="text-5xl font-bold mb-32 text-center">LISTED EXCHANGES</div>
        <div className="mb-32">
          <div className="border-b border-t h-32 border-default-200  hidden min-lg:flex">
            <CursorHover>
              <KucionIcon size={200} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <BinanceIcon size={220} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <GateIcon size={220} />
            </CursorHover>
          </div>
          <div className="border-b border-t h-24 border-default-200 flex lg:hidden mx-4">
            <CursorHover>
              <KucionIcon size={100} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <BinanceIcon size={120} />
            </CursorHover>
          </div>
          <div className="border-b border-t h-24 border-default-200 flex lg:hidden mx-4 -mt-[1px]">
            <CursorHover>
              <GateIcon size={100} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover />
          </div>
        </div> */}

        <div className="text-5xl font-bold mb-24 text-center">INVESTORS</div>
        <div className="mb-24">
          <div className="border-b border-t h-32 border-default-200  hidden min-lg:flex">
            <CursorHover>
              <OkxIcon size={230} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <ZhongXingIcon size={230} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <UobIcon size={230} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <JdiIcon size={230} />
            </CursorHover>
          </div>
          <div className="border-b border-t h-24 border-default-200 flex lg:hidden mx-4">
            <CursorHover>
              <OkxIcon size={70} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <ZhongXingIcon size={100} />
            </CursorHover>
          </div>
          <div className="border-b border-t h-24 border-default-200 flex lg:hidden mx-4 -mt-[1px]">
            <CursorHover>
              <UobIcon size={80} />
            </CursorHover>
            <DividerVerticalCubes />
            <CursorHover>
              <JdiIcon size={40} />
            </CursorHover>
          </div>
        </div>
      </div>
    </layouts.home>
  )
}

function CursorHover({ children, ...props }: PropsWithDetailedHTML) {
  return (
    <div className={clsx('cursor-pointer flex-1 flex justify-center items-center hover:scale-110 transition-all duration-300 text-white opacity-50 hover:opacity-100', props.className)} {...props}>
      {children}
    </div>
  )
}
