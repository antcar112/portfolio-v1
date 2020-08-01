import React from 'react'
import styled from 'styled-components'

import ProjectFeatures from 'src/components/Project/ProjectFeatures'
import ProjectTech from 'src/components/Project/ProjectTech'
import { SectionTitle, SectionParagraph } from 'src/components/Text/Text.js'

const StyledProjectDev = styled.section`
  margin: 60px auto 0;
`

const ProjectDev = ({ devDesc, tech, features }) => (
  <StyledProjectDev>
    <SectionTitle>Project Development</SectionTitle>
    {devDesc.map((paragraph, i) => (
      <SectionParagraph key={`DevDesc-${i}`}>{paragraph}</SectionParagraph>
    ))}

    <ProjectFeatures features={features} />
    <ProjectTech tech={tech} />
  </StyledProjectDev>
)

export default ProjectDev
