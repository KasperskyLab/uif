import React from 'react'

import { SegmentedControl as HexaSegmentedControl } from '@src/segmented-control'
import { SegmentedControlProps } from '@src/segmented-control/types'

import {
  previewSegmentedControlContentData,
  previewSegmentedControlTabsData
} from '../../preview'

const SegmentedControl = ({
  contentData = previewSegmentedControlContentData,
  defaultActiveTab = 'overview',
  tabsData = previewSegmentedControlTabsData,
  ...props
}: SegmentedControlProps): JSX.Element => (
  <HexaSegmentedControl
    contentData={contentData}
    defaultActiveTab={defaultActiveTab}
    tabsData={tabsData}
    {...props}
  />
)

export default SegmentedControl
