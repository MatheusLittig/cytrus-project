import { Fragment } from 'react'
import { FiCalendar, FiClock } from 'react-icons/fi'

interface PostTitleInfo {
  title: string
  date?: string | Date
  readTime: number | string
}

export function PostTitleInfo({
  title,
  date,
  readTime
}: PostTitleInfo): JSX.Element {
  return (
    <Fragment>
      <h1 className="font-bold text-2xl text-gray-50">{title}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-gray-50">
          <FiCalendar />
          <h3>{date}</h3>
        </div>

        <div className="flex items-center space-x-2 text-gray-50">
          <FiClock />
          <h3>{readTime}m</h3>
        </div>
      </div>
    </Fragment>
  )
}
