import { ReactNode } from 'react'

interface ProtectedRoutes {
  children: ReactNode
}

export function ProtectedRoutes({ children }: ProtectedRoutes): JSX.Element {
  return (
    <div className="dark:bg-gray-900 grid grid-rows-protected-routes grid-cols-protected-routes h-screen">
      {children}
    </div>
  )
}
