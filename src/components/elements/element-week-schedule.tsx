export function WeekSchedule(): JSX.Element {
  const posts = [
    {
      title: 'Review: 86 episode 11',
      status: 'DISPONÍVEL'
    },
    {
      title: 'Review: Fumetsu no Anata 13',
      status: 'DISPONÍVEL'
    },
    {
      title: 'Análise: Mawaru Penguindrum',
      status: 'PRODUÇÃO'
    },
    {
      title: 'Review: Vivy episode 9',
      status: 'PRODUÇÃO'
    },
    {
      title: 'Guia: temporada de outono',
      status: 'PENDENTE'
    },
    {
      title: 'Análise: Your Lie in April',
      status: 'PENDENTE'
    },
    {
      title: "Littig's week #18",
      status: 'PENDENTE'
    }
  ]

  function setStatusColor(status: string): string {
    switch (status) {
      case 'DISPONÍVEL':
        return 'bg-green-400'

      case 'PRODUÇÃO':
        return 'bg-yellow-400'

      default:
        return 'bg-gray-400'
    }
  }

  return (
    <div className="w-full space-y-8 bg-gray-800 p-4 rounded-lg">
      <h1 className="text-gray-50 text-xl font-bold">Agenda da semana</h1>

      <div className="w-full">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-gray-600 font-bold text-sm">CONTEÚDO</h3>
          <h3 className="text-gray-600 font-bold text-sm">STATUS</h3>
        </div>

        <div className="mt-2">
          {posts.map(post => (
            <div
              key={post.title}
              className="py-1 rounded-md flex items-center justify-between"
            >
              <h1 className="text-base text-gray-50">{post.title}</h1>
              <div
                className={`w-2 h-2 ${setStatusColor(
                  post.status
                )} rounded-full`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
