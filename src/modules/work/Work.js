import React from 'react'
import styled from 'styled-components'

import { WorkList } from '@src/modules/work'
import { Container, PageTitle } from '@src/ui/components'

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

export const Work = () => (
  <StyledWork>
    <ScrollTarget id='scroll-target' />
    <PageTitle>Projects</PageTitle>
    <Container>
      <WorkList />
    </Container>
  </StyledWork>
)
