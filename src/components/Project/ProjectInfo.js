import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/Button/Button'
import { SectionTitle, SectionSubtitle, SectionParagraph } from 'src/components/Text/Text.js'
import { media } from 'src/utils/media.js'

const StyledProjectInfo = styled.section`
  width: 100%;
  margin: 10px auto 0;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 100px;
  width: 100%;
  grid-template-columns: 2fr 1fr;

  ${media.down.md} {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`

const Buttons = styled.div`
  display: grid;
  grid-gap: 15px;
  align-self: start;
  justify-self: end;

  ${media.down.md} {
    grid-template-columns: 1fr 1fr;
    justify-self: start;
  }
  ${media.down.sm} {
    justify-self: stretch;
  }
  ${media.down.xs} {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const ProjectInfo = ({ title, subtitle, description, githubLink, hostedLink }) => (
  <StyledProjectInfo>
    <SectionTitle>{title}</SectionTitle>
    <Grid>
      <div>
        <SectionSubtitle>{subtitle}</SectionSubtitle>
        <SectionParagraph>{description}</SectionParagraph>
      </div>
      <Buttons>
        <Button text='See Website' href={hostedLink} />
        <Button outline text='View on GitHub' href={githubLink} />
      </Buttons>
    </Grid>
  </StyledProjectInfo>
)

export default ProjectInfo
