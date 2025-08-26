import { useStore } from '@hairy/react-lib'
import { Button } from '@heroui/react'
import Marquee from 'react-fast-marquee'

export function HomeEcosystemNarquee() {
  const config = useStore(store.config)
  const ecosystem = config.ecosystem.flatMap(item => item.items.map(item => item.icon))
  const router = useRouter()
  return (
    <>
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
    </>
  )
}
