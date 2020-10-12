import { media } from '@src/utils'
import styled from 'styled-components'

const getColor = ({ color, theme }, defaultColor = 'text') => {
  const defaultThemeColor = theme.color[defaultColor] || theme.color.text
  return color ? theme.color[color] || defaultThemeColor : defaultThemeColor
}

const getWeight = ({ weight }, defaultWeight = 400) => weight || defaultWeight

export const PageHeading = styled.h1`
  color: ${(props) => getColor(props)};
  font-weight: ${(props) => getWeight(props, 700)};
  text-align: center;
`
export const PageSubheading = styled.h2`
  color: ${(props) => getColor(props, 'primary')};
  font-weight: ${(props) => getWeight(props)};
  text-align: center;
`

export const Heading = styled.h2`
  color: ${(props) => getColor(props)};
  font-weight: ${(props) => getWeight(props, 700)};
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin-bottom: ${({ card }) => (card ? '10px' : '0.4em')};
`

export const Subheading = styled.h3`
  color: ${(props) => getColor(props, 'primary')};
  font-weight: ${(props) => getWeight(props)};
  margin-bottom: ${({ card }) => (card ? '30px;' : '16px')};
`

export const H4 = styled.h4`
  color: ${(props) => getColor(props)};
  font-weight: ${(props) => getWeight(props)};
  margin-top: 0;
  margin-bottom: 0.2em;
`

export const Paragraph = styled.p`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  font-weight: ${(props) => getWeight(props)};
  font-size: 1.2em;
  line-height: 1.5em;
  margin-bottom: ${({ card }) => (card ? '30px' : '1.4em')};

  ${media.down.lg} {
    font-size: 1.1em;
    line-height: 1.4em;
  }

  ${media.down.sm} {
    font-size: 1em;
  }
`

export const SubBody = styled.p`
  color: ${(props) => getColor(props, 'textSecondary')};
  font-weight: ${(props) => getWeight(props)};
  font-size: 1.1em;

  ${media.down.lg} {
    font-size: 1em;
  }

  ${media.down.sm} {
    font-size: 0.9em;
  }
`

export const ListItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 0.7em;
  font-weight: ${(props) => getWeight(props, 400)};

  ${media.down.lg} {
    font-size: 1.1em;
  }

  ${media.down.sm} {
    font-size: 1em;
  }
`

export const Span = styled.span`
  font-weight: ${(props) => getWeight(props, 700)};
  color: ${(props) => getColor(props, 'primary')};
`

export const Link = styled.a`
  font-weight: ${(props) => getWeight(props, 700)};
  color: ${(props) => getColor(props, 'primary')};
`
