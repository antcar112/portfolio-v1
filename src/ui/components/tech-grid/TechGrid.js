import React from 'react'
import styled from 'styled-components'

import { TechItem } from '@src/ui/components'
import { media } from '@src/utils'

export const TechGrid = ({ page, tech }) => {
  const StyledTechGrid = page === 'about' ? AboutGrid : ProjectGrid
  return (
    <StyledTechGrid>
      {tech.map(techItem => (
        <TechItem tech={techItem} key={techItem.name} showInProgress={page === 'about'} />
      ))}
    </StyledTechGrid>
  )
}

const AboutGrid = styled.div`
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

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 30px 20px;
  margin: 50px auto 20px;

  ${media.down.lg} {
    grid-template-columns: repeat(7, 1fr);
  }
  ${media.down.md} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 35px 20px;
  }
  ${media.down.sm} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 35px 10px;
  }
  ${media.down.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
`
