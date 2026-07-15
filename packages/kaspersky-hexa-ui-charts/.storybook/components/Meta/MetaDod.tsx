import { Grid, GridItem } from '@kaspersky/hexa-ui'
import { Space } from '@kaspersky/hexa-ui'
import { Text } from '@kaspersky/hexa-ui'
import React, { FC, useMemo } from 'react'

import { productColors } from '@kaspersky/hexa-ui-core/colors/js'
import { StatusNoThreadOutline, StatusOkOutline } from '@kaspersky/hexa-ui-icons/24'

import { metaDod, MetaDodProps } from './types'

type MetaDodKeys = keyof MetaDodProps['list']

export const MetaDod: FC<MetaDodProps> = ({ list }: MetaDodProps) => {
  const metaDodKeys = useMemo(() => Object.keys(metaDod) as MetaDodKeys[], [])

  return (
    <Grid layout={{ cols: ['repeat(2, 240px)'] }}>
      {metaDodKeys.map(key =>
        <GridItem key={key}>
          <Space size={8}>
            {list[key]
              ? <StatusOkOutline color={productColors.icon.status.statusgrass.light} />
              : <StatusNoThreadOutline color={productColors.icon.status.statusneutral.light} />}
            <Text>
              {metaDod[key]}
            </Text>
          </Space>
        </GridItem>
      )}
    </Grid>
  )
}
