import { Meta } from '@storybook/react'
import { withNextRouter } from 'storybook-addon-next-router'
import { MainMenu } from './index'

export default {
  title: 'Main menu',
  decorators: [withNextRouter]
} as Meta

export const Template = (): JSX.Element => <MainMenu />

export const Primary = Template.bind({})

Primary.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/'
    }
  }
}
