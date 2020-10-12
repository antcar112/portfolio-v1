import { techList } from '@src/data'
import { TechGrid, Text } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const TechSection = styled.section`
  margin-top: 2em;
`

export const AboutTech = () => (
  <TechSection>
    <Text center type='heading'>
      Tech I've Used
    </Text>
    <TechGrid page='about' tech={techList} />
  </TechSection>
)
