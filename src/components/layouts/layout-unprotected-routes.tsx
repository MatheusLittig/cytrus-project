import { ReactNode } from 'react'

interface ProtectedRoutes {
  children: ReactNode
}

export function UnprotectedRoutes({ children }: ProtectedRoutes): JSX.Element {
  return <div className="dark:bg-gray-800 grid-rows-3">{children}</div>
}
