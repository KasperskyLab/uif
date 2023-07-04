import React from 'react'
import styled from 'styled-components'
import { Select } from './Select'
import { ISelectProps } from './types'
import Meta from './__meta__/meta.json'

import { badges } from '../../.storybook/badges'
import { withMeta } from '../../helpers/hocs/MetaComponent/withMeta'
import { Toggle } from '../toggle/Toggle'

export default {
  title: 'Molecules/Select',
  component: Select,
  argTypes: {
    error: 'boolean'
  },
  args: {
    error: false
  },
  parameters: {
    badges: [badges.stable, badges.needsDesignReview],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const opts = [
  {
    label: 'Moscow',
    value: 1
  },
  {
    label: 'Saint Petersburg',
    value: 2
  },
  {
    label: 'Novosibirsk',
    value: 3
  },
  {
    label: 'Yekaterinburg',
    value: 4
  },
  {
    label: 'Kazan',
    value: 5
  },
  {
    label: 'Chelyabinsk',
    value: 6
  },
  {
    label: 'Omsk',
    value: 7
  },
  {
    label: 'Samara',
    value: 8
  },
  {
    label: 'Rostov',
    value: 9
  },
  {
    label: 'Ufa',
    value: 10
  },
  {
    label: 'Krasnoyarsk',
    value: 11
  },
  {
    label: 'Voronezh',
    value: 12
  },
  {
    label: 'Perm',
    value: 13
  },
  {
    label: 'Volgograd',
    value: 14
  },
  {
    label: 'Krasnodar',
    value: 15
  },
  {
    label: 'Saratov',
    value: 16
  },
  {
    label: 'Tyumen',
    value: 17
  },
  {
    label: 'Tolyatti',
    value: 18
  },
  {
    label: 'Izhevsk',
    value: 19
  },
  {
    label: 'Barnaul',
    value: 20
  }
]

const value = 1

const Wrapper = styled.div`
  height: 200px;
`

const SelectTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select defaultValue={defaultValue} options={options} {...rest} />
    </Wrapper>
  )
}

export const Basic = SelectTemplate.bind({})

const LoadingTemplate = ({
  options = opts,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select loading open options={options} {...rest} />
    </Wrapper>
  )
}

export const Loading = LoadingTemplate.bind({})

const SelectWithSearchTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        defaultValue={defaultValue}
        options={options}
        showSearch
        allowClear
        {...rest}
      />
    </Wrapper>
  )
}

export const SelectWithSearch = SelectWithSearchTemplate.bind({})

const MultiselectTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        mode='multiple'
        defaultValue={defaultValue}
        options={options}
        {...rest}
      />
    </Wrapper>
  )
}

export const Multiselect = MultiselectTemplate.bind({})

const MultiselectWithSearchTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        mode='multiple'
        defaultValue={defaultValue}
        options={options}
        showSearch
        {...rest}
      />
    </Wrapper>
  )
}

export const MultiselectWithSearch = MultiselectWithSearchTemplate.bind({})

const MultiselectWithClearTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        mode='multiple'
        defaultValue={defaultValue}
        options={options}
        showSearch
        allowClear
        {...rest}
      />
    </Wrapper>
  )
}

export const MultiselectWithClear = MultiselectWithClearTemplate.bind({})

const DisabledTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select disabled defaultValue={defaultValue} options={options} {...rest} />
    </Wrapper>
  )
}

export const Disabled = DisabledTemplate.bind({})

const WithFooterTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        defaultValue={defaultValue}
        options={options}
        renderFooter={() => (
          <div style={{
            padding: '8px 12px'
          }}>
            <a href="#">Terms and Conditions</a>
          </div>
        )}
        {...rest}
      />
    </Wrapper>
  )
}

export const WithFooter = WithFooterTemplate.bind({})

const WithHeaderTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        defaultValue={defaultValue}
        options={options}
        renderHeader={() => (
          <div style={{
            padding: '8px 12px'
          }}>
            <b>Custom Header</b>
          </div>
        )}
        {...rest}
      />
    </Wrapper>
  )
}

export const WithHeader = WithHeaderTemplate.bind({})

const CustomDropdownTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <Wrapper>
      <Select
        defaultValue={defaultValue}
        options={options}
        renderDropdown={menu => (
          <>
            <div style={{
              padding: '8px 12px'
            }}>
              <Toggle
                checked={checked}
                onChange={value => setChecked(value)}
              >
                <>{checked ? 'Hide' : 'Show'} Content</>
              </Toggle>
            </div>
            {checked && <>{menu}</>}
          </>
        )}
        {...rest}
      />
    </Wrapper>
  )
}

export const CustomDropdown = CustomDropdownTemplate.bind({})

const TagsTemplate = ({
  options = opts,
  defaultValue = value,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        defaultValue={defaultValue}
        options={options}
        mode='tags'
        {...rest}
      />
    </Wrapper>
  )
}

export const Tags = TagsTemplate.bind({})

const NoDataTemplate = ({
  options = [],
  defaultValue = undefined,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        defaultValue={defaultValue}
        options={options}
        open
        {...rest}
      />
    </Wrapper>
  )
}

export const NoData = NoDataTemplate.bind({})

const PlaceholderTemplate = ({
  options = opts,
  ...rest
}: ISelectProps) => {
  return (
    <Wrapper>
      <Select
        placeholder='Placeholder Text'
        options={options}
        {...rest} />
    </Wrapper>
  )
}

export const Placeholder = PlaceholderTemplate.bind({})
