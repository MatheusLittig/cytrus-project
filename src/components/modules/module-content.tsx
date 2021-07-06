import { ReactNode } from 'react'
import { FiGithub, FiTwitch, FiTwitter } from 'react-icons/fi'
import { SessionInfo, UserStats } from '../elements'

interface ContentProps {
  children: ReactNode
}

export function Content({ children }: ContentProps): JSX.Element {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl m-screen h-full grid grid-cols-protected-routes">
        <div className="pr-4 py-4">{children}</div>

        <div className="border-l border-gray-600 pl-4 py-4 space-y-8 grid grid-rows-app-sider overflow-y-auto">
          <div className="space-y-8">
            <SessionInfo />
            <UserStats />
          </div>

          <div className="bg-gray-800 rounded-md p-4 max-h-56">
            <h1 className="text-gray-50 text-xl font-bold">Agenda da semana</h1>
          </div>

          <div className="flex items-center space-x-4">
            <h2 className="font-semibold text-gray-50">Nos siga!</h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <FiTwitter />
              <FiTwitch />
              <FiGithub />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
