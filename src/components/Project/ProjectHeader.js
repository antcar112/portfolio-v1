import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import { PageTitle, PageSubtitle } from 'src/components/Text/Text'
import { media } from 'src/utils/media.js'

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

const ProjectHeader = ({ background, title, subtitle, image }) => (
  <StyledHeader>
    <PageTitle>{title}</PageTitle>
    <PageSubtitle>{subtitle}</PageSubtitle>
    <ColorSection background={background}>
      <Fade bottom>
        <img src={image} alt={title} />
      </Fade>
    </ColorSection>
  </StyledHeader>
)

export default ProjectHeader
