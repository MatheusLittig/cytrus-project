import { Meta } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { MainMenu } from './index'

export default {
  title: 'Main menu',
  decorators: [withNextRouter]
} as Meta

export const MainMenuStory = (): JSX.Element => <MainMenu />

MainMenuStory.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/'
    }
  }
}
