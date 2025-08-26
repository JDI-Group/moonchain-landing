import type { PropsWithDetailedHTML } from '@hairy/react-lib'
import { redirectTo } from '@hairy/utils'
import { Button } from '@heroui/react'
import { layouts } from '@/layouts'
import { Head } from '@/layouts/components/head'
import { Navbar } from '@/layouts/components/navbar'

function Page() {
  return (
    <layouts.home>
      <div className="min-h-screen relative flex flex-col bg-primary overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_#0000006e_0%,_transparent_20%)] z-[1]" />
        <div className="mx-auto container relative z-10">
          <Head />
          <Navbar />
        </div>
        <div className="flex-1 flex items-center z-10 container mx-auto gap-10 lg:gap-20 max-lg:flex-col px-4">
          <div className="flex flex-col text-black lg:flex-1 relative z-10">
            <div className="text-5xl lg:text-[5rem] font-bold">MEET</div>
            <div className="text-5xl lg:text-[5rem] mb-2 font-bold">MOONBASE APP</div>
            <div className="text-lg mb-10">Moonbase is a non-custodial wallet and dApp hub that puts Web3 at your fingertips. Store and manage assets securely while unlocking mining, swaps, staking, and AI-powered insights — all in one seamless app.</div>
            <div className="flex gap-3 flex-wrap">
              <Button
                size="lg"
                className="flex-1 text-black lg:flex-none lg:w-[144px] hover:bg-black hover:text-white gap-1"
                radius="none"
                variant="bordered"
                onPress={() => redirectTo('https://apps.apple.com/app/moonbase-the-mining-hub/id6736371768')}
              >
                <Icon className="flex-shrink-0" fontSize={24} icon="formkit:apple" />
                <div className="flex flex-col text-left">
                  <div className="text-[11px] leading-none">Download on the</div>
                  <div className="text-base leading-none font-bold">App Store</div>
                </div>
              </Button>
              <Button
                size="lg"
                className="flex-1 text-black lg:flex-none lg:w-[144px] hover:bg-black hover:text-white gap-1"
                radius="none"
                variant="bordered"
                onPress={() => redirectTo('https://play.google.com/store/apps/details?id=com.moonchain.app')}
              >
                <Icon className="flex-shrink-0" fontSize={24} icon="basil:google-play-solid" />
                <div className="flex flex-col text-left">
                  <div className="text-[11px] leading-none">GET IT ON</div>
                  <div className="text-base leading-none font-bold">Google Play</div>
                </div>
              </Button>
              <Button
                size="lg"
                className="flex-1 text-black lg:flex-none lg:w-[144px] hover:bg-black hover:text-white"
                radius="none"
                variant="bordered"
                onPress={() => redirectTo('https://github.com/MXCzkEVM/moonchain-wallet/releases/tag/250731150')}
              >
                <Icon className="flex-shrink-0" fontSize={24} icon="bytesize:github" />
                <div className="text-base leading-none font-bold">GITHUB</div>

              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative max-lg:p-8 max-lg:pb-16">
            <img src="/images/app/apps.png" alt="app" className="w-full h-full object-cover relative z-10" />
            <img src="/images/app/apps-mark.png" alt="app" className="absolute object-cover scale-250 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-48 pb-24 container mx-auto px-4">
        <div className="text-5xl lg:text-[5rem] font-bold mb-24">FEATURES</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          <CursorHover>
            <CustodyIcon size={40} className="flex-shrink-0" />
            <div className="flex flex-col gap-2">
              <div className="text-2xl leading-none font-bold">Self-Custody by Default</div>
              <div className="text-sm text-default-600 description transition-colors duration-300">You control your keys, always. </div>
            </div>
          </CursorHover>
          <CursorHover>
            <SwapsIcon size={40} className="flex-shrink-0" />
            <div className="flex flex-col gap-2">
              <div className="text-2xl leading-none font-bold">Seamless In-App Swaps</div>
              <div className="text-sm text-default-600 description transition-colors duration-300">Trade directly from your wallet inside the terminal.</div>
            </div>
          </CursorHover>
          <CursorHover>
            <DeFiIcon size={40} className="flex-shrink-0" />
            <div className="flex flex-col gap-2">
              <div className="text-2xl leading-none font-bold">DeFi-Ready</div>
              <div className="text-sm text-default-600 description transition-colors duration-300">Connect to dApps, stake, and earn without ever leaving the app.</div>
            </div>
          </CursorHover>
          <CursorHover>
            <PrivacyIcon size={40} className="flex-shrink-0" />
            <div className="flex flex-col gap-2">
              <div className="text-2xl leading-none font-bold">Privacy First</div>
              <div className="text-sm text-default-600 description transition-colors duration-300">No KYC, no surveillance - just pure decentralized access.</div>
            </div>
          </CursorHover>
        </div>
      </div>
    </layouts.home>
  )
}

function CursorHover({ children, ...props }: PropsWithDetailedHTML) {
  return (
    <div className={clsx('cursor-pointer flex bg-[#1E1F24] rounded-xs p-6 gap-4 hover:bg-primary hover:[&_.description]:text-black hover:text-black transition-colors duration-300', props.className)} {...props}>
      {children}
    </div>
  )
}

export default Page
