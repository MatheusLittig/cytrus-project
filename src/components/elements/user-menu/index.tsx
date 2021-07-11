import { FiBell, FiBookmark, FiUser } from 'react-icons/fi'

export function UserMenu(): JSX.Element {
  const userMenuOptions = [
    {
      title: 'Perfil',
      icon: <FiUser />,
      active: true,
      notification: false
    },
    {
      title: 'Notificações',
      icon: <FiBell />,
      active: false,
      notification: true
    },
    {
      title: 'Lista de leitura',
      icon: <FiBookmark />,
      active: false,
      notification: true
    }
  ]

  return (
    <nav className="w-full space-y">
      {userMenuOptions.map(item => (
        <div
          key={item.title}
          className="w-full flex items-center space-x-4 p-2 cursor-pointer group"
        >
          <i
            className={`
            ${!item.active ? 'text-gray-50' : 'text-yellow-500'}
            group-hover:text-yellow-500`}
          >
            {item.icon}
          </i>

          <div className="w-full rounded-sm flex items-center justify-between">
            <p
              className={`font-bold group-hover:text-yellow-500 text-lg
              ${!item.active ? 'text-gray-50' : 'text-yellow-500'}
              `}
            >
              {item.title}
            </p>
            {item.notification && (
              <span
                className="
                rounded-sm py-0.5 px-2 border border-yellow-500 text-xs text-yellow-500
                "
              >
                NOVO
              </span>
            )}
          </div>
        </div>
      ))}
    </nav>
  )
}
