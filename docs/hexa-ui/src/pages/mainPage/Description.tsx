import React from 'react'

import '../index.css'

import styled from 'styled-components'

import { Card as CardHexa, Link, Space, Text } from '@kaspersky/hexa-ui'
import { ArrowForward } from '@kaspersky/hexa-ui-icons/16'

import AccordionImage from './assets/Accordion.svg?react'
import ActionButtonImage from './assets/ActionButton.svg?react'
import AlertImage from './assets/Alert.svg?react'
import AnchorLinkImage from './assets/AnchorLink.svg?react'
import GridImage from './assets/Grid.svg?react'
import PaletteImage from './assets/Palette.svg?react'
import SizeAndIndentImage from './assets/SizeAndIndent.svg?react'
import TypographyImage from './assets/Typography.svg?react'

const Card = styled(CardHexa)`
  width: 288px;
`

const DescriptionCard = ({ value, children }: { value: string, children: React.ReactNode }) => {
  return (
    <Card
      mode="base"
      size= "medium"
      title={{
        size: 'small',
        value: value
      }}
    >
      {children}
    </Card>
  )
}

export function Description () {

  const basePrinciples = (
    <Space width="100%" gap="section">
      <div className="text-with-card">
        <Space gap="related" direction="vertical" align="start">
          <Text type="H2">
            Базовые принципы
          </Text>
          <Text type="BTR2">
            Фундамент визуального языка дизайн-системы
          </Text>
        </Space>
        <Link
          className="link"
          decoration="icon"
          href="#" //TODO
          icon={<ArrowForward />}
          size="noSize"
          // target="_top"
          text="К базовым принципам"
        />
      </div>
      <Space gap="grouped">
        <DescriptionCard value="Палитра"> <PaletteImage className="card-image" /> </DescriptionCard>
        <DescriptionCard value="Типографика"> <TypographyImage className="card-image" /> </DescriptionCard>
        <DescriptionCard value="Размеры и отступы"> <SizeAndIndentImage className="card-image" /> </DescriptionCard>
        <DescriptionCard value="Сетка"> <GridImage className="card-image" /> </DescriptionCard>
      </Space>
    </Space>
  )

  const components = (
    <Space width="100%" gap="section">
      <div className="text-with-card">
        <Space gap="related" direction="vertical" align="start">
          <Text type="H2">
            Компоненты
          </Text>
          <Text type="BTR2">
            Библиотека включает более 50 компонентов, синхронизированных между дизайном и кодом
          </Text>
        </Space>
        <Link
          className="link"
          decoration="icon"
          href="#" //TODO
          icon={<ArrowForward />}
          size="noSize"
          // target="_top"
          text="К компонентам"
        />
      </div>
      <Space gap="grouped">
        <DescriptionCard value="Accordion"> <AccordionImage className="card-image" /> </DescriptionCard>
        <DescriptionCard value="Action button"> <ActionButtonImage className="card-image" /> </DescriptionCard>
        <DescriptionCard value="Alert"> <AlertImage className="card-image" /> </DescriptionCard>
        <DescriptionCard value="Anchor link"> <AnchorLinkImage className="card-image" /> </DescriptionCard>
      </Space>
    </Space>
  )

  return (
    <Space gap={56} className="main-content">
      {basePrinciples}
      {components}
    </Space>
  )
}
