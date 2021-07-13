import { PostTitleInfo } from '../post-title-info'

export function TreendingPosts(): JSX.Element {
  type PostContent = {
    title: string
    imgCover: string
    date: string | Date
    readTime: number | string
    author: string
  }

  const postContent: PostContent[] = [
    {
      title: 'Review Final: Wonder Egg Priority',
      imgCover:
        'https://lacradoresdesintoxicadoshome.files.wordpress.com/2021/01/imagem_2021-01-14_094357.png?w=1200',
      date: '21 de junho - 2021',
      readTime: '5m',
      author: 'Matheus Littig'
    },
    {
      title: 'Guia: Estreias da Primavera | 2021',
      imgCover:
        'https://i.pinimg.com/originals/58/72/08/58720846f46979b76bad77976a7bb96e.jpg',
      date: '21 de junho - 2021',
      readTime: '20m',
      author: 'Matheus Littig'
    }
  ]

  return (
    <div className="grid grid-rows-2 grid-cols-4 w-full h-64 gap-4">
      <div
        className="col-span-2 row-span-2 rounded-md border border-gray-600 relative group-hover:text-yellow-500 cursor-pointer"
        style={{
          background: `linear-gradient(0deg, #111827, transparent), url(${postContent[0].imgCover}) center`,
          backgroundSize: 'cover'
        }}
      >
        <div
          style={{
            bottom: '16px',
            left: '16px',
            right: '16px'
          }}
          className="absolute space-y-4"
        >
          <PostTitleInfo
            title={postContent[0].title}
            date={postContent[0].date}
            readTime={5}
          />
        </div>
      </div>

      <div
        className="col-span-2 row-span-1 bg-blue-400 rounded-md border border-gray-600 relative"
        style={{
          background: `linear-gradient(0deg, #111827, transparent), url(${postContent[1].imgCover}) center`,
          backgroundSize: 'cover'
        }}
      >
        <div
          style={{
            bottom: '16px',
            left: '16px',
            right: '16px'
          }}
          className="absolute space-y-4"
        >
          <PostTitleInfo
            title={postContent[1].title}
            date={postContent[1].date}
            readTime={20}
          />
        </div>
      </div>
      <div className="col-span-1 row-span-1 bg-green-400 rounded-md" />
      <div className="col-span-1 row-span-1 bg-yellow-400 rounded-md" />
    </div>
  )
}
