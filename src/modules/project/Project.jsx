import { ProjectDev, ProjectHeader, ProjectInfo, ProjectVideo } from '@src/modules/project'
import { Button, Container } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
  margin-bottom: 30px;
`

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  ${media.down.xs} {
    padding: 0 20px;
  }
`

export const Project = ({ project, tech }) => {
  const {
    background,
    description,
    devDesc,
    features,
    githubLink,
    hostedLink,
    image,
    subtitle,
    title,
    video,
  } = project

  return (
    <ProjectContainer>
      <ProjectHeader background={background} image={image} subtitle={subtitle} title={title} />
      <Container>
        <InnerContainer>
          <ProjectInfo
            description={description}
            githubLink={githubLink}
            hostedLink={hostedLink}
            subtitle={subtitle}
            title={title}
          />
          <ProjectVideo title={title} video={video} />
          <ProjectDev devDesc={devDesc} features={features} tech={tech} />
          <Button direction='down' outline text='Go Back' to='/' />
        </InnerContainer>
      </Container>
    </ProjectContainer>
  )
}
