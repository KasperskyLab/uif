import { Icon } from './Icon'

const meta = {
  title: 'Icon/Icon',
  component: Icon,
  argTypes: {
    color: { control: 'color' },
    opacity: { control: 'number' }
  }
}

export default meta

export const Color = {
  args: {
    color: 'green'
  }
}
