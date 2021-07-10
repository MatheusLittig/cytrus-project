import { mainMenu } from '../../../constants/main-menu'
import { useRouter } from 'next/dist/client/router'

export function MainMenu(): JSX.Element {
  const router = useRouter()

  return (
    <nav className="flex h-full">
      {mainMenu.map(item => (
        <div
          key={item.title}
          className="px-4 relative h-full flex items-center justify-center cursor-pointer"
        >
          <p className="font-bold text-gray-50">{item.title}</p>

          {router.asPath === item.route && (
            <div className="h-1 w-full bg-yellow-500 absolute rounded-tl-full rounded-tr-full bottom-0" />
          )}
        </div>
      ))}
    </nav>
  )
}
