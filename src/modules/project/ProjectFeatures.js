import { SectionSubtitle, SectionListItem } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const StyledProjectFeatures = styled.div`
  margin: 50px auto;
`

const FeatureList = styled.ul`
  list-style-type: square;
  margin-top: 1.5em;
`

export const ProjectFeatures = ({ features }) => (
  <StyledProjectFeatures>
    <SectionSubtitle>Key Features</SectionSubtitle>
    <FeatureList>
      {features.map((feature, i) => (
        <SectionListItem key={`feat-${i}`}>{feature}</SectionListItem>
      ))}
    </FeatureList>
  </StyledProjectFeatures>
)
