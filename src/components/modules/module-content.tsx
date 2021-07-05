import { ReactNode } from 'react'
import { SessionInfo } from '../elements'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps): JSX.Element {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-screen h-full grid grid-cols-protected-routes">
        <div className="pr-4 py-4">{children}</div>
        <div className="border-l border-gray-600 pl-4 py-4">
          <SessionInfo />
        </div>
      </div>
    </div>
  )
}
