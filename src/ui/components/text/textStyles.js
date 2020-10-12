import { media } from '@src/utils'
import styled, { css } from 'styled-components'
import {
  getColor,
  getFontWeight,
  getMarginBottom,
  getTextAlign,
  getTextDecoration,
} from './textUtils'

const SharedTextStyles = css`
  color: ${(props) => getColor(props)};
  font-weight: ${(props) => getFontWeight(props)};
  margin-bottom: ${(props) => getMarginBottom(props)};
  text-align: ${(props) => getTextAlign(props)};
  text-decoration: ${(props) => getTextDecoration(props)};
`

const BodyFontSize = css`
  font-size: 1.2em;

  ${media.down.lg} {
    font-size: 1.1em;
  }
  ${media.down.sm} {
    font-size: 1em;
  }
`

export const H1 = styled.h1`
  ${SharedTextStyles}
`

export const H2 = styled.h2`
  ${SharedTextStyles}
`

export const H3 = styled.h3`
  ${SharedTextStyles}
`

export const H4 = styled.h4`
  ${SharedTextStyles}
  margin-top: 0;
`

export const Subtitle = styled.p`
  ${SharedTextStyles}

  font-size: 1.1em;

  ${media.down.lg} {
    font-size: 1em;
  }

  ${media.down.sm} {
    font-size: 0.9em;
  }
`

export const Body = styled.p`
  ${SharedTextStyles}
  ${BodyFontSize}

  line-height: 1.5em;

  ${media.down.lg} {
    line-height: 1.4em;
  }
`

export const ListItem = styled.li`
  ${SharedTextStyles}
  ${BodyFontSize}
`

export const Span = styled.span`
  ${SharedTextStyles}
`

export const Link = styled.a`
  ${SharedTextStyles}
`
