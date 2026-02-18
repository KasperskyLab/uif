import { Link } from '@src/link'
import { SectionMessage } from '@src/section-message'
import { Tag } from '@src/tag'
import { P, Text } from '@src/typography'
import React from 'react'
import styled from 'styled-components'

export const StyledTag = styled(Tag)`
  margin: 0;
`

const TooltipStoryLink = () => (
  <Link
    href="./?path=/story/hexa-ui-components-tooltip--with-disabled-component"
    target="_blank"
  >
    Tooltip Story
  </Link>
)

export const TooltipCompositionWarning = ({ propName }: {propName?: string}) => (
  <SectionMessage closable={false} mode="info" style={{ marginBottom: 16 }}>
    <P>
      <StyledTag>{propName || 'tooltip'}</StyledTag> is not a prop of this component. The example shows possible composition. If <StyledTag>Tooltip</StyledTag> not working with <StyledTag>disabled</StyledTag> components see <TooltipStoryLink />
    </P>
    <P>
      <StyledTag>{propName || 'tooltip'}</StyledTag> не является пропом компонента. Пример показывает возможную композицию. Если <StyledTag>Tooltip</StyledTag> на <StyledTag>disabled</StyledTag> компоненте не срабатывает смотри <TooltipStoryLink />
    </P>
  </SectionMessage>
)

export const TableTreeInfo = () => (
  <SectionMessage closable={false} mode="warning">
    <Text>Each node (table row) must have a unique <StyledTag>key</StyledTag> property with <StyledTag>React.Key</StyledTag> type to make expanding/collapsing feature work correctly</Text>
    <Text>Для корректной работы разворачивания/сворачивания узлов дерева у каждого узла (строки таблицы) должен быть уникальный ключ <StyledTag>key</StyledTag> типа <StyledTag>React.Key</StyledTag></Text>
  </SectionMessage>
)

export const ControllableActiveKeyInfo = () => (
  <SectionMessage closable={false} mode="info">
    <P>This story demonstrates the ability to control the state of an active navigation item from outside the component.</P>
    <P>Данный пример стори демонстрирует возможность контроля состояния активного элемента навигации извне компонента.</P>
  </SectionMessage>
)

export const FieldWithCustomLabelInfo = () => (
  <SectionMessage closable={false} mode="info">
    <P>A label can contain a React Node with any suitable content. The appearance of a custom label must be approved by the design system team. This story shows approved examples.</P>
    <P>Label может содержать React Node с произвольным контентом. Внешний вид кастомного лейбла обязательно необходимо согласовать с командой дизайн-системы. В этой сторе показаны одобренные примеры.</P>
  </SectionMessage>
)