import { SectionSubtitle, SectionParagraph, TechGrid } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const StyledProjectTech = styled.div`
  margin: 50px auto 0;
  ${media.down.md} {
    margin-bottom: 30px;
  }
`

export const ProjectTech = ({ tech }) => (
  <StyledProjectTech>
    <SectionSubtitle>Tools Used</SectionSubtitle>
    <SectionParagraph>
      Here are some of the key pieces of technology used in building and designing this project.
    </SectionParagraph>
    <TechGrid tech={tech} page='project' />
  </StyledProjectTech>
)
