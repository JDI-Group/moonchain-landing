import type { PropsWithChildren } from 'react'
import { fonts } from '@/config/fonts'
import { Footer } from './components/footer'

export default function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className={clsx('relative flex flex-col min-h-screen', fonts.barlow.className)}>
      {children}
      <Footer />
    </div>
  )
}
