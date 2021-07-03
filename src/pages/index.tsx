import { ProtectedRoutes } from '@/components/layouts'
import { Header } from '@/components/modules'

export default function Home(): JSX.Element {
  return (
    <ProtectedRoutes>
      <Header />
      <div className="row-span-1 bg-transparent">2</div>
      <div className="row-span-1 bg-transparent border-l border-gray-600">
        3
      </div>
    </ProtectedRoutes>
  )
}
