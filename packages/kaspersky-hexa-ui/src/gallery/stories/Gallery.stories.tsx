import { withMeta } from '@sb/components/Meta'
import { Gallery, GalleryProps } from '@src/gallery'
import { StoryObj } from '@storybook/react'
import React, { useCallback, useMemo } from 'react'

import MetaData from '../__meta__/meta.json'

import { api, repeatArray } from './helpers'
import exampleFull1 from './mocks/office_1_full.jpg'
import examplePreview1 from './mocks/office_1_preview.jpg'
import exampleFull2 from './mocks/office_2_full.jpg'
import examplePreview2 from './mocks/office_2_preview.jpg'
import exampleFull3 from './mocks/office_3_full.jpg'
import examplePreview3 from './mocks/office_3_preview.jpg'

export default {
  title: 'Hexa UI Components/Gallery',
  component: Gallery,
  parameters: {
    docs: {
      page: withMeta(MetaData)
    }
  }
}

type Story = StoryObj<GalleryProps>

export const Simple: Story = {
  render: () => {
    const list = useMemo(() => {
      const examples = [
        {
          preview: examplePreview1,
          full: exampleFull1
        },
        {
          preview: examplePreview2,
          full: exampleFull2
        },
        {
          preview: examplePreview3,
          full: exampleFull3
        }
      ]

      return repeatArray({ array: examples, times: 8 })
    }, [])

    return (
      <Gallery screensList={list} />
    )
  }
}

export const SimpleWithFullscreensOnly: Story = {
  render: () => {
    const list = useMemo(() => {
      return [
        exampleFull1,
        exampleFull2,
        exampleFull3,
        exampleFull1,
        exampleFull2,
        exampleFull3,
        exampleFull1,
        exampleFull2,
        exampleFull3
      ]
    }, [])

    return (
      <Gallery screensList={list} />
    )
  }
}

export const SimpleWithCustomSrc: Story = {
  render: () => {
    const list = useMemo(() => {
      return [
        {
          preview: 'office_1_preview',
          full: 'office_1_full'
        },
        {
          preview: 'office_2_preview',
          full: 'office_2_full'
        },
        {
          preview: 'office_3_preview',
          full: 'office_3_full'
        }
      ]
    }, [])

    const createSrc = useCallback(
      (name: string) => `/static/media/src/gallery/mocks/${name}.jpg`,
      []
    )

    return (
      <Gallery
        screensList={list}
        createSrc={createSrc}
      />
    )
  }
}

export const SimpleWithBrokenUrl: Story = {
  render: () => {
    const list = useMemo(() => {
      return [
        {
          preview: examplePreview1,
          full: exampleFull1
        },
        {
          preview: '/broken_url.jpg',
          full: '/broken_url_second.jpg'
        },
        {
          preview: examplePreview2,
          full: exampleFull2
        },
        {
          preview: examplePreview3,
          full: exampleFull3
        }
      ]
    }, [])

    return (
      <Gallery screensList={list} />
    )
  }
}

const disabledControls = {
  screensList: { table: { disable: true } },
  value: { table: { disable: true } },
  onChange: { table: { disable: true } },
  createSrc: { table: { disable: true } },
  handleCustomImageLoad: { table: { disable: true } },
  zoomInText: { table: { disable: true } },
  zoomOutText: { table: { disable: true } },
  imageLoadingFailureText: { table: { disable: true } },
  screenPerPage: { table: { disable: true } },
  rootSelector: { table: { disable: true } }
}

export const SimpleControllable: Story = {
  render: (args) => {
    const list = useMemo(() => {
      return [
        {
          preview: examplePreview1,
          full: exampleFull1
        },
        {
          preview: examplePreview2,
          full: exampleFull2
        },
        {
          preview: examplePreview3,
          full: exampleFull3
        }
      ]
    }, [])

    return (
      <Gallery
        screensList={list}
        value={args.value}
        onChange={args.onChange}
      />
    )
  },
  argTypes: {
    ...disabledControls,
    value: {
      control: { type: 'select' },
      options: [
        null,
        exampleFull1,
        exampleFull2,
        exampleFull3
      ]
    }
  }
}

export const SimpleWithCustomPerPage: Story = {
  render: (args) => {
    const list = useMemo(() => {
      const examples = [
        {
          preview: examplePreview1,
          full: exampleFull1
        },
        {
          preview: examplePreview2,
          full: exampleFull2
        },
        {
          preview: examplePreview3,
          full: exampleFull3
        }
      ]

      return repeatArray({ array: examples, times: 8 })
    }, [])

    return (
      <Gallery
        screensList={list}
        screenPerPage={args.screenPerPage}
      />
    )
  },
  argTypes: {
    ...disabledControls,
    screenPerPage: {
      defaultValue: 10,
      control: { type: 'select' },
      options: [
        5,
        10,
        15,
        20,
        25,
        30
      ]
    }
  }
}

const listWithImageIds = new Array(100).fill(null).map((_, index) => ({
  preview: `preview_${index}`,
  full: `full_${index}`
}))

export const WithCustomLoader: Story = {
  args: {
    screensList: listWithImageIds,
    handleCustomImageLoad: api.loadImage
  }
}

export const WithCustomLoaderControllable: Story = {
  render: (args) => {
    const list = useMemo(() => {
      return [
        {
          preview: 'preview_1',
          full: 'full_1'
        },
        {
          preview: 'preview_2',
          full: 'full_2'
        },
        {
          preview: 'preview_3',
          full: 'full_3'
        }
      ]
    }, [])

    return (
      <Gallery
        screensList={list}
        handleCustomImageLoad={api.loadImage}
        value={args.value}
        onChange={args.onChange}
      />
    )
  },
  argTypes: {
    ...disabledControls,
    value: {
      control: { type: 'select' },
      options: [
        null,
        'full_1',
        'full_2',
        'full_3'
      ]
    }
  }
}
