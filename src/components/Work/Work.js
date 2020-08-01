import React from 'react'
import styled from 'styled-components'

import Container from 'src/components/Container/Container'
import { PageTitle } from 'src/components/Text/Text'
import WorkList from 'src/components/Work/WorkList'

const StyledWork = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`

const ScrollTarget = styled.div`
  width: 1px;
  height: 1px;
  background: none;
  position: relative;
  top: -90px;
`

const Work = () => (
  <StyledWork>
    <ScrollTarget id='scroll-target' />
    <PageTitle>Projects</PageTitle>
    <Container>
      <WorkList />
    </Container>
  </StyledWork>
)

export default Work
