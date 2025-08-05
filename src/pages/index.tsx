import { Button } from '@heroui/react'
import { Head } from '@/layouts/components/head'
import { Navbar } from '@/layouts/components/navbar'

export default function IndexPage() {
  return (
    <layouts.default>
      <div className="h-screen relative flex flex-col">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,_black_0%,_transparent_20%,_transparent_80%,_black_100%)] z-[1]" />
        <video src="/videos/home-video.mp4" autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 z-0" />
        <img src="/images/home-mark.png" alt="home-mark" className="w-full h-full object-cover absolute top-0 left-0" />
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
      </div>
      <div className="h-screen relative">

      </div>
    </layouts.default>
  )
}
