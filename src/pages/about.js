import React from 'react'
import styled from 'styled-components'

import { AboutContact, AboutIntro, AboutSkills } from '@src/modules/about'
import { Container, Text } from '@src/ui/components'
import { Layout } from '@src/ui/layout'

const StyledAbout = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`

const About = () => {
  return (
    <Layout pageTitle='About'>
      <StyledAbout>
        <Container>
          <Text type='page-heading'>About Me</Text>
          <AboutIntro />
          <AboutSkills />
          <AboutContact />
        </Container>
      </StyledAbout>
    </Layout>
  )
}

export default About
