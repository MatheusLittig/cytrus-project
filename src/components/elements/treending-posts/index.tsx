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
      title: 'Guia: Estreias do Verão - 2021',
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
        className="col-span-2 row-span-2 rounded-md border border-gray-600 relative group cursor-pointer bg-auto hover:bg-150%"
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
        className="col-span-2 row-span-1 rounded-md border border-gray-600 relative group cursor-pointer"
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

      <div
        className="col-span-1 row-span-1 rounded-md border border-gray-600 relative cursor-pointer"
        style={{
          background:
            "linear-gradient(0deg, #111827, transparent), url('/littigs-week-cover.png') center",
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
          <div className="flex items-center space-x-2">
            <img
              src="/littig-week.svg"
              alt="Littig's Week"
              style={{ height: '32px' }}
            />

            <h1 className="text-4xl font-bold text-yellow-500 group-hover:border-gray-400">
              #04
            </h1>
          </div>
        </div>
      </div>

      <div
        className="col-span-1 row-span-1 rounded-md border border-gray-600 relative cursor-pointer"
        style={{
          background:
            "linear-gradient(0deg, #111827, transparent), url('/season-reviews-cover.png') center",
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
          <img
            src="/season-reviews.svg"
            alt="Season Reviews"
            style={{ height: '38px' }}
          />
        </div>
      </div>
    </div>
  )
}
