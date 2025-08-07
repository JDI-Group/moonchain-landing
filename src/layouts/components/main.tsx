import type { PropsWithChildren } from 'react'

export function Main({ children }: PropsWithChildren) {
  return <main className="flex-1">{children}</main>
}
