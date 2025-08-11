import { useStore } from '@hairy/react-lib'
import { redirectTo } from '@hairy/utils'
import { Card, CardBody } from '@heroui/react'
import Spline from '@splinetool/react-spline'
import { layouts } from '@/layouts'

function Page() {
  const config = useStore(store.config)
  return (
    <layouts.default>
      <div className="flex items-center border-b border-dashed border-white/20 mb-16 overflow-hidden">
        <div className="flex-1 flex flex-col px-6 lg:px-0 relative z-10 -mr-12">
          <div className="text-5xl font-bold mb-4">
            ECOSYSTEM
          </div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
        <Spline
          className="w-fit! h-fit! -ml-26 md:ml-0 md:-mr-26"
          scene="https://prod.spline.design/KQ3MFPcGhZ7NFiN1/scene.splinecode"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 px-6 lg:px-0">
        {config.ecosystem.map(item => (
          <div key={item.title} className="lg:col-span-[var(--span)] flex flex-col" style={{ ['--span' as any]: `${Math.min(item.items.length, 5)}` }}>
            <div className="text-2xl font-bold">{item.title}</div>
            <div className="text-lg text-white/50 mb-8">{item.description}</div>
            <div className="grid gap-8 flex-1 grid-cols-2 lg:grid-cols-[var(--columns)]" style={{ ['--columns' as any]: `repeat(${Math.min(item.items.length, 5)}, 1fr)` }}>
              {item.items.map(item => (
                <div onClick={() => redirectTo(item.link)} key={item.title}>
                  <Card isFooterBlurred className="border-none cursor-pointer h-full">
                    <CardBody className="flex flex-col gap-2 text-lg p-4">
                      <img src={item.icon} alt={item.title} className="w-10 h-10" />
                      <div>{item.title}</div>
                      <div className="text-white/50">{item.description}</div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </layouts.default>
  )
}

export default Page
