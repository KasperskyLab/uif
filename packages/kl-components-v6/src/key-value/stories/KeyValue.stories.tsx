import React from 'react'
import styled from 'styled-components'
import { badges } from '../../../.storybook/badges'
import { withMeta } from '../../../helpers/hocs/MetaComponent/withMeta'
import Meta from '../__meta__/meta.json'
import { Button } from '../../button'
import { KeyValue, KeyWithIcon } from '../KeyValue'
import { KeyValuePair } from '../types'
import { StoryLayout } from '../../../.storybook/StoryComponents'
import { useTheme } from '../../../design-system/theme/hooks'
import { Link } from '../../link'

const Wrapper = styled.div`
  width: 100%;
`

export default {
  title: 'Atoms/KeyValue',
  component: KeyValue,
  parameters: {
    badges: [badges.dev],
    docs: {
      page: withMeta(Meta)
    }
  }
}

const data: KeyValuePair[] = [
  {
    pairKey: <KeyWithIcon icon='Copy'>Copy</KeyWithIcon>,
    pairValue: 'SideCopy'
  },
  {
    pairKey: <KeyWithIcon icon='Web'>URL</KeyWithIcon>,
    pairValue:
      'side.copy.google.com/user7773578ixh1092090.appspot.com/index.html'
  },
  {
    pairKey: 'Button',
    pairValue: (
      <Button size='medium' mode='primaryBlack'>
        Button
      </Button>
    )
  },
  {
    pairKey: 'Link',
    pairValue: (
      <Link href='#'>
        Link
      </Link>
    )
  }
]

export const BasicTemplate = () => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <Wrapper>
        <KeyValue componentId='kl-key-value' data={data} />
      </Wrapper>
    </StoryLayout>
  )
}

export const WrapperClasses = () => {
  const theme = useTheme()

  return (
    <StoryLayout theme={theme.key}>
      <KeyValue
        componentId='kl-key-value'
        data={[{ pairKey: 'Key', pairValue: 'value' }]}
        wrapperClasses={{
          keyClassName: 'keyClassName',
          valueClassName: 'valueClassName'
        }}
      />
    </StoryLayout>
  )
}

export const CustomMargin = () => {
  const theme = useTheme()
  return (
    <StoryLayout theme={theme.key}>
      <KeyValue
        componentId='kl-key-value'
        data={[{ pairKey: 'Key', pairValue: 'value' }]}
        keysMargin={72}
      />
    </StoryLayout>
  )
}
