import { AboutContact, AboutExperience, AboutIntro, AboutTech } from '@src/modules/about'
import { Container, PageHeading } from '@src/ui/components'
import { Layout } from '@src/ui/layout'
import React from 'react'
import styled from 'styled-components'

const StyledAbout = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`

const About = () => (
  <Layout pageTitle='About'>
    <StyledAbout>
      <Container>
        <PageHeading title='About Me' />
        <AboutIntro />
        <AboutExperience />
        <AboutTech />
        <AboutContact />
      </Container>
    </StyledAbout>
  </Layout>
)

export default About
