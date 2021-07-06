import Head from 'next/head'
import { Fragment, ReactNode } from 'react'

import { Content, Header } from '../modules'

interface ProtectedRoutes {
  children: ReactNode
  title: string
}

export function ProtectedRoutes({
  children,
  title
}: ProtectedRoutes): JSX.Element {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <div className="dark:bg-gray-900 grid grid-rows-protected-routes">
        <Header />
        <Content>{children}</Content>
      </div>
    </Fragment>
  )
}
