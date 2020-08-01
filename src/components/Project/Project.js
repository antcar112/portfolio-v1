import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import ProjectDev from 'src/components/Project/ProjectDev'
import ProjectHeader from 'src/components/Project/ProjectHeader'
import ProjectInfo from 'src/components/Project/ProjectInfo'
import ProjectVideo from 'src/components/Project/ProjectVideo'
import { media } from 'src/utils/media.js'

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

const Project = ({ project, tech }) => {
  const { title, subtitle, background, description, image, githubLink, hostedLink, video, devDesc, features } = project

  return (
    <ProjectContainer>
      <ProjectHeader background={background} title={title} subtitle={subtitle} image={image} />
      <Container>
        <InnerContainer>
          <ProjectInfo
            title={title}
            subtitle={subtitle}
            description={description}
            githubLink={githubLink}
            hostedLink={hostedLink}
          />
          <ProjectVideo video={video} title={title} />
          <ProjectDev devDesc={devDesc} features={features} tech={tech} />
          <Button outline to='/' text='Go Back' direction='down' />
        </InnerContainer>
      </Container>
    </ProjectContainer>
  )
}

export default Project
