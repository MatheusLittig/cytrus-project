import { FiCalendar, FiClock } from 'react-icons/fi'

export function OtherContents(): JSX.Element {
  type PostContent = {
    title: string
    imgCover: string
    category?: string[]
    date: string | Date
    readTime: number | string
    author: string
  }

  const postContent: PostContent[] = [
    {
      title: 'Review Final: Vivy Flourite Eyes Song',
      category: ['REVIEW', 'PRIMAVERA'],
      imgCover: 'https://otakusbrasil.com/wp-content/uploads/2021/04/vivy.jpg',
      date: '21 de junho - 2021',
      readTime: 5,
      author: 'Matheus Littig'
    },
    {
      title: 'Primeiras impresões: Vanitas de Carte',
      category: ['IMPRESSÕES', 'VERÃO'],
      imgCover:
        'https://i1.wp.com/sakugabrasil.com/wp-content/uploads/2021/06/vanitasnokarte_6.jpg?fit=730%2C411&ssl=1',
      date: '21 de junho - 2021',
      readTime: 6,
      author: 'Matheus Littig'
    }
  ]

  return (
    <div className="grid grid-rows-4 grid-cols-2 gap-4 w-full">
      {postContent.map(post => (
        <div key={post.title} className="flex space-x-2 w-full">
          <div
            className="w-28 h-28 rounded-md border border-gray-600"
            style={{
              background: `url(${post.imgCover}) center`,
              backgroundSize: 'cover'
            }}
          />

          <div className="flex flex-col items-start justify-between h-full">
            <div className="flex items-center space-x-2">
              {post.category.map(item => (
                <p
                  key={item}
                  className="px-2 py-1 border rounded-xl border-yellow-500 font-medium text-yellow-500 text-xs"
                >
                  {item}
                </p>
              ))}
            </div>

            <h1 className="text-xl font-bold text-gray-50">{post.title}</h1>

            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-2 text-gray-50 group-hover:text-gray-200">
                <FiCalendar />
                <h3>{post.date}</h3>
              </div>

              <div className="flex items-center space-x-2 text-gray-50 group-hover:text-gray-200">
                <FiClock />
                <h3>{post.readTime}m</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
