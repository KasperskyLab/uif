import { Dropdown } from '@src/dropdown'
import { BasicTableStory, Story, basicTwoColumns } from './_commonConstants'
import React from 'react'
import { Link } from '@src/link'
import { ArrowDownSmall, FilterPlus, Alarm, Copy } from '@kaspersky/hexa-ui-icons/16'
import { Notification, openNotification } from '@src/notification'

const columns = basicTwoColumns.map(column => (
  column.key === 'name'
    ? {
        ...column,
        render: (value: string, _record: any, index: number) => (
          <Dropdown
            trigger={['click']}
            placement="bottomLeft"
            closeOnScroll
            closeOnWindowBlur
            overlay={[
              {
                key: 'alerts',
                componentsBefore: [<Alarm key="alarm" />],
                children: 'Find in alerts',
                onClick: () => {
                  openNotification.success({
                    description: `Added to alerts on row: ${index + 1}`
                  })
                }
              },
              {
                key: 'toFilter',
                componentsBefore: [<FilterPlus key="filter-plus" />],
                children: 'Add to filter',
                onClick: () => {
                  openNotification.success({
                    description: `Added to filter on row: ${index + 1}`
                  })
                }
              },
              {
                children: null,
                type: 'divider'
              },
              {
                key: 'copy',
                componentsBefore: [<Copy key="copy" />],
                children: 'Copy',
                onClick: () => {
                  openNotification.success({
                    description: `Copied to clipboard on rows: ${index + 1}`
                  })
                }
              }
            ]}
          >
            <Link
              text={value}
              decoration="icon"
              icon={<ArrowDownSmall />}
            />
          </Dropdown>
        )
      }
    : column
))

export const WithContextMenuOnLink: Story = {
  render: (args) => (
    <>
      <Notification />
      <BasicTableStory {...args} />
    </>
  ),
  args: {
    columns
  }
}
