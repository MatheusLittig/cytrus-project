import { ProtectedRoutes } from '@/components/layouts'
import { Header, Sider } from '@/components/modules'

export default function Home(): JSX.Element {
  return (
    <ProtectedRoutes>
      <Header />
      <div className="row-span-1 bg-transparent">2</div>
      <Sider />
    </ProtectedRoutes>
  )
}
