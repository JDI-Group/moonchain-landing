import type { PropsWithChildren } from 'react'
import { fonts } from '@/config/fonts'
import { Footer } from './components/footer'
import { Head } from './components/head'
import { Main } from './components/main'
import { Navbar } from './components/navbar'

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <div className={clsx('mx-auto container relative flex flex-col min-h-screen', fonts.barlow.className)}>
      <Head />
      <Navbar />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}
