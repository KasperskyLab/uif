import { Button } from '@src/button'
import { CheckboxGroup } from '@src/checkbox'
import { Modal } from '@src/modal'
import { Radio } from '@src/radio'
import { SectionMessage } from '@src/section-message'
import { Sidebar } from '@src/sidebar'
import { Space } from '@src/space'
import { Toolbar, ToolbarItems } from '@src/toolbar'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { Download2, Printer } from '@kaspersky/hexa-ui-icons/16'

import { Card } from '../Card'

const cardContent = `Kaspersky Security Network (KSN) Statement for Kaspersky Endpoint Security for Windows 12.7.0.539

KASPERSKY SECURITY NETWORK (KSN) STATEMENT - Kaspersky Endpoint Security 12 for Windows

Kaspersky Security Network Statement (hereinafter "KSN Statement") relates to the computer program Kaspersky Endpoint Security (hereinafter "Software").
KSN Statement along with the End User License Agreement for Software, in particular in the Paragraph "Conditions regarding Data Processing" specifies the conditions, responsibilities, and procedures relating to the transmission and processing of the data, indicated in the KSN Statement. Carefully read the terms of the KSN Statement, as well as all documents referred to in the KSN Statement, before accepting it.

When the End User activates the use of KSN, the End User is fully responsible for ensuring that the processing of personal data of Data Subjects is lawful, particularly, within the meaning of Article 6 (1) (a) to (1) (f) of Regulation (EU) 2016/679 (General Data Protection Regulation, "GDPR") if Data Subject is in the European Union, or applicable laws on confidential information, personal data, data protection, or similar thereto.

Data Protection and Processing

Data received by the Rightholder from the End User during the use of KSN are handled in accordance with the Rightholder's Privacy Policy published at: https://www.kaspersky.com/Products-and-Services-Privacy-Policy.

Purpose of Data Processing

To make it possible to increase the Software's spe7d of reaction to information and network security threats. The declared purpose is achieved by:
- determining the reputation of scanned objects;
- identifying information security threats that are new and challenging to detect, and their sources;
- taking prompt measures to increase the protection of the data stored and processed by the End User with the Computer;
- reducing the likelihood of false positives;
- increasing the efficiency of Software components;
- investigating cases of infection of a user's computer;
- improving the performance of the Rightholder's products;
- receiving reference information about the number of objects with known reputation.
Processed Data

While the KSN is enabled, the Rightholder automatically receives and processes the following data:
The data transmitted by the User depends on the type of license installed and the KSN use settings specified.
If you use a license for 1-4 nodes, the Rightholder will automatically receive and process the following data during use of the KSN:
- information about KSN configuration updates: identifier for the active configuration, identifier for the configuration received, error code for the configuration update;
- information about files and URL addresses to be scanned: checksums of the scanned file (MD5, SHA2-256, SHA1) and file patterns (MD5), the size of the pattern, type of the detected threat and its name according to Rightholder's classification, identifier for the anti-virus databases, URL address for which the reputation is being requested, as well as the referrer URL address, the connection's protocol identifier and the number of the port being used;
- the identifier of the scan task which detected the threat;
- information about digital certificates being used needed to verify their authenticity: the checksums (SHA2-256) of the certificate used to sign the scanned object and the certificate's public key;
- the identifier of the Software component performing scanning;
- IDs of the anti-virus databases and of the records in these anti-virus databases;`

const getFooter = (onSave: () => void, onCancel: () => void) => {
  return (
    <>
      <Button onClick={onSave}>
        Save
      </Button>
      <Button mode="secondary" onClick={onCancel}>
        Cancel
      </Button>
    </>
  )
}

const checkboxOptions = [
  {
    label: `I confirm that i have fully read, understand, and accept the terms and conditions
    of the Kaspersky Endpoint Security for Mac 11.2 End User License Agreement`,
    value: '1'
  },
  {
    label: 'I confirm that i have fully read, understand, and accept the terms and conditions of the  End User License Agreement для Network Agent 13',
    value: '2'
  },
  {
    label: `I confirm that I have fully read and understand the Privacy Policy. I am aware and agree that my data will be handled and 
    transmitted (including to third countries) as described in the Privacy Policy.`,
    value: '3'
  }
]

const getItemsLeft = (): ToolbarItems[] => [
  {
    type: 'button',
    key: '1',
    label: 'Download PDF',
    iconBefore: <Download2 />
  },
  {
    type: 'button',
    key: '2',
    label: 'Print',
    iconBefore: <Printer />
  }
]

const heights = {
  toolbar: '48px',
  radio: '69px',
  checkboxGroup: '179px',
  title: '144px',
  sectionMessage: '71px',
  footer: '81px',
  storybook: '56px'
}

const meta: Meta = {
  title: 'Other/Eula',
  tags: ['!autodocs']
}

export default meta

export const WithCheckbox: StoryObj = {
  render: () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [isModalOpen, setIsModalOpen] = React.useState(false)
    const [checkboxState, setCheckboxState] = React.useState<string[]>([])
    const [sectionVisibleMessage, setSectionVisibleMessage] = React.useState(false)
    const [hasTriedSubmit, setHasTriedSubmit] = React.useState(false)

    const mapOptionsWithInvalidState = (options: typeof checkboxOptions, checkedValues: string[]) => {
      return options.map(option => ({
        ...option,
        invalid: !checkedValues.includes(option.value)
      }))
    }

    const currentCheckboxOptions = hasTriedSubmit
      ? mapOptionsWithInvalidState(checkboxOptions, checkboxState)
      : checkboxOptions

    const handleSave = () => {
      setHasTriedSubmit(true)

      if (checkboxState.length === checkboxOptions.length) {
        setIsSidebarOpen(false)
      } else {
        setSectionVisibleMessage(true)
      }
    }

    const handleClose = () => {
      setIsSidebarOpen(false)
      setIsModalOpen(false)
      setHasTriedSubmit(false)
      setCheckboxState([])
      setSectionVisibleMessage(false)
    }

    const actionsButtons = {
      FIRST_ACTION: {
        text: 'Close',
        onClick: handleClose
      },
      SECOND_ACTION: {
        text: 'Cancel',
        onClick: () => setIsModalOpen(false)
      }
    }

    const { footer, title, sectionMessage, checkboxGroup, storybook, toolbar } = heights

    const totalCardHeight = !sectionVisibleMessage
      ? `calc(100dvh - ${toolbar} - ${storybook} - ${checkboxGroup} - ${title} - ${footer})`
      : `calc(100dvh - ${toolbar} - ${storybook} - ${checkboxGroup} - ${title} - ${footer} - ${sectionMessage})`


    return (
      <>
        <Button onClick={() => { setIsSidebarOpen(true) }}>
          Open
        </Button>
        <Sidebar
          visible={isSidebarOpen}
          onClose={checkboxState.length ? () => setIsModalOpen(true) : handleClose}
          title="Kaspersky Security Network Statement for Kaspersky Endpoint Security for Windows (12.7.0.539)"
          size="small"
          footerLeft={getFooter(handleSave, checkboxState.length ? () => setIsModalOpen(true) : handleClose)}
        >
          <Space gap="grouped">
            <Toolbar left={getItemsLeft()} />
            <Card maxHeight={totalCardHeight} mode="filled">
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {cardContent}
              </div>
            </Card>
            {sectionVisibleMessage && (
              <SectionMessage mode="error" onClose={() => setSectionVisibleMessage(false)}>
                You must accept the terms of the license agreement to continue
              </SectionMessage>
            )}
            <Space direction="vertical" gap="grouped">
              <CheckboxGroup
                options={currentCheckboxOptions}
                value={checkboxState}
                onChange={(checkedValues) => {
                  setCheckboxState(checkedValues)
                }}
              />
            </Space>
          </Space>
        </Sidebar>
        <Modal
          visible={isModalOpen}
          actions={actionsButtons}
          header="Close without saving?"
          content="Any unsaved changes will be lost"
          onCancel={() => setIsModalOpen(false)}
        />
      </>
    )
  }
}

const radioOptions = [
  {
    label: 'I agree to participate in < Document Title >',
    value: '1'
  },
  {
    label: 'I do not agree to participate in  < Document Title >',
    value: '2'
  }
]

export const WithRadioButton: StoryObj = {
  render: () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
    const [isInvalidRadio, setIsInvalidRadio] = React.useState(false)
    const [radioState, setRadioState] = React.useState<string>()

    const handleSave = () => {
      if (radioState) {
        setIsSidebarOpen(false)
      } else {
        setIsInvalidRadio(true)
      }
    }

    const handleClose = () => {
      setIsSidebarOpen(false)
      setRadioState('')
      setIsInvalidRadio(false)
    }

    const { footer, title, radio, storybook, toolbar } = heights

    const totalCardHeight = `calc(100dvh - ${toolbar} - ${storybook} - ${radio} - ${title} - ${footer})`

    return (
      <>
        <Button onClick={() => { setIsSidebarOpen(true) }}>
          Open
        </Button>
        <Sidebar
          visible={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          title="Kaspersky Security Network Statement for Kaspersky Endpoint Security for Windows (12.7.0.539)"
          size="small"
          footerLeft={getFooter(handleSave, handleClose)}
        >
          <Space gap="grouped">
            <Toolbar left={getItemsLeft()} />
            <Card maxHeight={totalCardHeight} mode="filled">
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {cardContent}
              </div>
            </Card>
            <Space direction="vertical" gap="grouped">
              <Radio
                options={radioOptions}
                invalid={isInvalidRadio}
                onChange={(e) => {
                  setRadioState(e.target.value)
                  setIsInvalidRadio(false)
                }}
                value={radioState}
                vertical
              />
            </Space>
          </Space>
        </Sidebar>
      </>
    )
  }
}
