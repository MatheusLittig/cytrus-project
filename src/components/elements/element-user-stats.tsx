import { FiAward, FiHeart, FiMessageCircle, FiShare2 } from 'react-icons/fi'

export function UserStats(): JSX.Element {
  return (
    <div className="w-full space-y-8">
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <h3 className="font-bold text-sm text-gray-500">ESTATÍSTICAS</h3>
          <p className="px-4 py-1 font-bold bg-gray-800 text-yellow-500 text-xs rounded-full">
            APOIADOR
          </p>
        </div>

        <div className="flex flex-col items-start space-y-1">
          <div className="flex items-center space-x-2">
            <FiHeart className="text-gray-50" />
            <span className="text-gray-50">
              <strong>91</strong> Likes
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FiMessageCircle className="text-gray-50" />
            <span className="text-gray-50">
              <strong>22</strong> Comentários
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <FiShare2 className="text-gray-50" />
            <span className="text-gray-50">
              <strong>22</strong> Compartilhamentos
            </span>
          </div>
        </div>
      </div>

      <div className="w-full py-3 px-2 bg-gray-800 border border-yellow-500 rounded-xl flex items-center space-x-2">
        <FiAward className="text-yellow-500 w-8 h-8 stroke-1" />

        <div className="space-y-1">
          <h3 className="text-gray-50 text-sm font-semibold">
            Torne-se um apoiador!
          </h3>
          <p className="text-sm text-gray-50">
            Dobro de XP e posts exclusivos!
          </p>
        </div>
      </div>
    </div>
  )
}
