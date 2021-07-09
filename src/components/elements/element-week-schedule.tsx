import { FiCheckCircle, FiClock, FiPauseCircle } from 'react-icons/fi'
import { SectionDivider } from './element-section-divider'

export function WeekSchedule(): JSX.Element {
  const posts = [
    {
      title: 'Review: 86 Eighty-Six - #11',
      category: 'TEMPORADA',
      picture:
        'https://somoskudasai.com/wp-content/uploads/2021/04/portada_eighty-six-14.jpg',
      status: 'DISPONÍVEL'
    },
    {
      title: 'Review: Fumetsu no Anata - #13',
      category: 'TEMPORADA',
      picture:
        'https://images-na.ssl-images-amazon.com/images/I/81DBqXng9DL.jpg',
      status: 'DISPONÍVEL'
    },
    {
      title: 'Análise: Mawaru Penguindrum',
      category: 'CLÁSSICOS',
      picture:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/05/mawaru-penguindrum.jpg',
      status: 'EM PRODUÇÃO'
    },
    {
      title: 'Review: Vivy Flourite Eyes Song #9',
      category: 'TEMPORADA',
      picture:
        'https://lacradoresdesintoxicadoshome.files.wordpress.com/2021/04/capturar11.png',
      status: 'PENDENTE'
    }
  ]

  function setStatusColor(status: string, type: 'text' | 'addOn'): string {
    switch (status) {
      case 'DISPONÍVEL':
        return type === 'addOn' ? 'bg-green-400' : 'text-green-400'

      case 'EM PRODUÇÃO':
        return type === 'addOn' ? 'bg-yellow-400' : 'text-yellow-500'

      default:
        return type === 'addOn' ? 'bg-gray-300' : 'text-gray-300'
    }
  }

  function setStatusIcon(status: string) {
    switch (status) {
      case 'DISPONÍVEL':
        return <FiCheckCircle className="text-green-400" />

      case 'EM PRODUÇÃO':
        return <FiClock className="text-yellow-500" />

      default:
        return <FiPauseCircle className="text-gray-400" />
    }
  }

  return (
    <div className="w-full space-y-4">
      <SectionDivider title="AGENDA DA SEMANA" />

      <div className="w-full">
        {posts.map(item => (
          <div
            key={item.title}
            className={
              'w-full px-3 py-4 border-b border-gray-600 hover:bg-gray-800 cursor-pointer space-y-1'
            }
          >
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <p className="text-xs text-gray-400">{item.category}</p>
                <div className="w-1 h-1 bg-gray-400 rounded-full" />
                <span
                  className={`${setStatusColor(item.status, 'text')} text-xs`}
                >
                  {item.status}
                </span>
              </div>

              {setStatusIcon(item.status)}
            </div>

            <h2 className="text-gray-50 font-bold">{item.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
