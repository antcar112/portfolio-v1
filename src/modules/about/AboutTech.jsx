import { techList } from '@src/data'
import { SectionHeading, TechGrid } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const TechSection = styled.section`
  margin-top: 2em;
`

export const AboutTech = () => (
  <TechSection>
    <SectionHeading center title="Tech I've Used" />
    <TechGrid page='about' tech={techList} />
  </TechSection>
)
