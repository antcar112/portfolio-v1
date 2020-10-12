import { WorkList } from '@src/modules/work'
import { Container, PageHeading } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

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
    <PageHeading title='Projects' />
    <Container>
      <WorkList />
    </Container>
  </StyledWork>
)
