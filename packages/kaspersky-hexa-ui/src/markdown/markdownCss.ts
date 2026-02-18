import { getTextSizes } from '@design-system/tokens'
import { ThemeConfig } from '@design-system/types'
import { shouldForwardProp } from '@helpers/shouldForwardProp'
import styled from 'styled-components'

import { textLevels } from '@kaspersky/hexa-ui-core/typography/js'

import { MarkdownProps } from './types'

export const StyledText = styled.span.withConfig({ shouldForwardProp })`
  ${getTextSizes(textLevels.BTR3)};
  > * {
    color: ${({ themedColor, theme }: MarkdownProps & { theme: ThemeConfig }) => {
    if (theme?.colors) {
      return theme.colors.textIconsElements[themedColor || 'primary']
    }
  }};
  }
  
  strong {
    ${getTextSizes(textLevels.BTM3)};
  }

  h1 {
    ${getTextSizes(textLevels.H1)};
  }

  h2 {
    ${getTextSizes(textLevels.H2)};
  }

  h3 {
    ${getTextSizes(textLevels.H3)};
  }

  h4 {
    ${getTextSizes(textLevels.H4)};
  }

  h5 {
    ${getTextSizes(textLevels.H5)};
  }

  h6 {
    ${getTextSizes(textLevels.H6)};
  }

  // add LinkExternal icon from @kaspersky/hexa-ui-icons/16 package to external links
  a[target="_blank"]:after {
    --svg: url('data:image/svg+xml,<svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.317 4.267a.95.95 0 0 1 .95-.95h2.4a.65.65 0 1 0 0-1.3h-2.4a2.25 2.25 0 0 0-2.25 2.25v7.466a2.25 2.25 0 0 0 2.25 2.25h7.466a2.25 2.25 0 0 0 2.25-2.25v-2.4a.65.65 0 1 0-1.3 0v2.4a.95.95 0 0 1-.95.95H4.267a.95.95 0 0 1-.95-.95V4.267Z" fill="currentColor"></path><path d="M8.683 2.667c0 .359.291.65.65.65h2.431L7.207 7.874a.65.65 0 0 0 .92.919l4.556-4.557v2.43a.65.65 0 1 0 1.3 0v-4a.65.65 0 0 0-.65-.65h-4a.65.65 0 0 0-.65.65Z" fill="currentColor"></path></svg>');
    
    content: "";
    mask-image: var(--svg); 
    mask-position: right top;
    mask-repeat: no-repeat;
    background-color: currentColor;
    padding-left: 16px;
    margin-left: 4px;
  }
`
