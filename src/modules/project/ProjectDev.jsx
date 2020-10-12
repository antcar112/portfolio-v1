import { ProjectFeatures, ProjectTech } from '@src/modules/project'
import { SectionHeading, Text } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const StyledProjectDev = styled.section`
  margin: 60px auto 0;
`

export const ProjectDev = ({ devDesc, features, tech }) => (
  <StyledProjectDev>
    <SectionHeading title='Project Development' />
    {devDesc.map((paragraph) => (
      <Text key={`DevDesc-${paragraph}`}>{paragraph}</Text>
    ))}

    <ProjectFeatures features={features} />
    <ProjectTech tech={tech} />
  </StyledProjectDev>
)
