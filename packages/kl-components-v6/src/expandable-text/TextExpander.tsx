import React, { ComponentProps } from 'react'

import { Link } from '../link'

export const TextExpander = (props: ComponentProps<typeof Link>) => {
  return <Link { ...props } className='text-expander'>
    {'>>'}
  </Link>
}
