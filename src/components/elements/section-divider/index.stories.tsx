import { Meta } from '@storybook/react'
import { SectionDivider } from './index'

export default {
  title: 'Section divider'
} as Meta

export const SectionDividerStory = (): JSX.Element => (
  <SectionDivider title="Teste" />
)
