import { ProjectFeatures, ProjectTech } from '@src/modules/project'
import { SectionTitle, SectionParagraph } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const StyledProjectDev = styled.section`
  margin: 60px auto 0;
`

export const ProjectDev = ({ devDesc, tech, features }) => (
  <StyledProjectDev>
    <SectionTitle>Project Development</SectionTitle>
    {devDesc.map((paragraph, i) => (
      <SectionParagraph key={`DevDesc-${i}`}>{paragraph}</SectionParagraph>
    ))}

    <ProjectFeatures features={features} />
    <ProjectTech tech={tech} />
  </StyledProjectDev>
)
