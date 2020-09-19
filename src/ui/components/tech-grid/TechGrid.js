import React from 'react'
import styled from 'styled-components'

import { techList } from '@src/content'
import { TechItem } from '@src/ui/components'
import { media } from '@src/utils'

const StyledTechGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 20px;
  margin: 40px auto 0;

  ${media.down.lg} {
    grid-template-columns: repeat(8, 1fr);
  }
  ${media.down.md} {
    grid-template-columns: repeat(6, 1fr);
    margin: 40px auto 30px;
  }
  ${media.down.sm} {
    grid-template-columns: repeat(5, 1fr);
  }
  ${media.down.xs} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const TechGrid = ({ showInProgress }) => (
  <StyledTechGrid>
    {techList.map(tech => (
      <TechItem tech={tech} key={tech.name} showInProgress={!!showInProgress} />
    ))}
  </StyledTechGrid>
)
