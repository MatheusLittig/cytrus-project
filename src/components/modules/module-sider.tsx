import { SessionInfo, UserStats } from '../elements'

export function Sider(): JSX.Element {
  return (
    <div className="row-span-1 bg-transparent border-l border-gray-600 grid grid-rows-app-sider">
      <div className="border-b border-gray-600 pl-6 py-6 pr-16">
        <SessionInfo />
        <UserStats />
      </div>

      <div className="bg-transparent" />
      <div className="border-t border-gray-600" />
    </div>
  )
}
