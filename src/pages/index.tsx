import {
  SessionInfo,
  TreendingPosts,
  UserMenu,
  WeekSchedule
} from '@/components/elements'
import { Button } from '@/components/elements/button'
import { Header } from '@/components/modules'
import Head from 'next/head'
import { Fragment } from 'react'
import { FiMoon, FiType } from 'react-icons/fi'
import Sticky from 'react-stickynode'

export default function Home(): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>Home | Cytrus</title>
      </Head>

      <div className="h-full grid grid-rows-app bg-gray-900">
        <div className="border-b border-gray-700 bg-gray-900 sticky top-0 z-50">
          <Header />
        </div>

        <div className="my-0 mx-auto grid grid-cols-app-content">
          <div className="bg-transparent pr-4 space-y-8 py-8 border-r border-gray-700">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl text-gray-50 font-bold">
                Em alta esta semana!
              </h1>

              <div className="flex items-center space-x-4">
                <Button title="Português-BR" icon={<FiType />} />
                <Button icon={<FiMoon />} variant="rounded" />
              </div>
            </div>

            <TreendingPosts />
          </div>

          <Sticky top={80}>
            <div className="py-6 pl-4 space-y-8">
              <SessionInfo />
              <UserMenu />

              <WeekSchedule />
            </div>
          </Sticky>
        </div>
      </div>
    </Fragment>
  )
}
