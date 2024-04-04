import { StoryObj, Meta } from '@storybook/react'
import { withMeta } from '@helpers/hocs/MetaComponent/withMeta'
import { sbHideControls } from '@helpers/storybookHelpers'
import MetaData from './__meta__/meta.json'
import { FormLabel } from './FormLabel'
import { FormLabelProps } from '@src/form-label/types'

const meta: Meta<FormLabelProps> = {
  title: 'Molecules/Form Label',
  component: FormLabel,
  argTypes: {
    tooltip: {
      control: { type: 'text' }
    },
    ...sbHideControls(['theme'])
  },
  args: {
    mode: 'primary',
    children: 'My text',
    tooltip: 'Replace me',
    required: false,
    disabled: false,
    testId: 'form-label-test-id',
    klId: 'form-label-kl-id'
  },
  parameters: {
    docs: {
      page: withMeta(MetaData)
    },
    design: MetaData.figmaView
  }
}
export default meta

type Story = StoryObj<FormLabelProps>

export const Basic: Story = {}
