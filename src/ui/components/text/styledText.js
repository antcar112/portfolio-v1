import { media } from '@src/utils'
import styled from 'styled-components'

export const PageHeading = styled.h1`
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
  text-align: center;
`
export const PageSubheading = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 400;
  text-align: center;
`

export const Heading = styled.h2`
  color: ${({ theme }) => theme.color.text};
  font-weight: 700;
  text-align: ${({ center }) => (center ? 'center' : 'left')};
  margin-bottom: ${({ card }) => (card ? '10px' : '0.4em')};
`

export const Subheading = styled.h3`
  font-weight: 400;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: ${({ card }) => (card ? '30px;' : '16px')};
`

export const Paragraph = styled.p`
  text-align: ${(props) => (props.center ? 'center' : 'left')};
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

export const ListItem = styled.li`
  font-size: 1.2em;
  margin-bottom: 0.7em;

  ${media.down.lg} {
    font-size: 1.1em;
  }

  ${media.down.sm} {
    font-size: 1em;
  }
`

export const Hightlight = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`

export const Link = styled.a`
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
`
