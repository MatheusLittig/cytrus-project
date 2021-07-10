import { Meta } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { Header } from './index'

export default {
  title: 'Header',
  decorators: [withNextRouter]
} as Meta

export const HeaderStory = (): JSX.Element => <Header />

HeaderStory.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/'
    }
  }
}
