import { ReactNode } from 'react'
import { Content, Header } from '../modules'

interface ProtectedRoutes {
  children: ReactNode
}

export function ProtectedRoutes({ children }: ProtectedRoutes): JSX.Element {
  return (
    <div className="dark:bg-gray-900 grid grid-rows-protected-routes">
      <Header />
      <Content>{children}</Content>
    </div>
  )
}
