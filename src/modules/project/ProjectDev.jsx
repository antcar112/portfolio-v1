import { ProjectFeatures, ProjectTech } from '@src/modules/project'
import { Text } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const StyledProjectDev = styled.section`
  margin: 60px auto 0;
`

export const ProjectDev = ({ devDesc, tech, features }) => (
  <StyledProjectDev>
    <Text type='heading'>Project Development</Text>
    {devDesc.map((paragraph) => (
      <Text key={`DevDesc-${paragraph}`}>{paragraph}</Text>
    ))}

    <ProjectFeatures features={features} />
    <ProjectTech tech={tech} />
  </StyledProjectDev>
)
