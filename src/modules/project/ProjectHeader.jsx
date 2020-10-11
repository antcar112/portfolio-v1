import { Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHeader = styled.section`
  width: 100%;
  padding-top: 1.5em;
`
const ColorSection = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 85vh;
  background: ${({ background }) => background};
  display: grid;
  place-items: center center;

  & img {
    height: 80%;
  }

  ${media.down.md} {
    height: 75vh;
  }
  ${media.down.sm} {
    height: 65vh;
  }
  ${media.down.xs} {
    height: 50vh;
    & img {
      height: auto;
      width: 80%;
    }
  }
`

export const ProjectHeader = ({ background, image, subtitle, title }) => (
  <StyledHeader>
    <Text type='page-heading'>{title}</Text>
    <Text type='page-subheading'>{subtitle}</Text>
    <ColorSection background={background}>
      <Fade bottom>
        <img alt={title} src={image} />
      </Fade>
    </ColorSection>
  </StyledHeader>
)
