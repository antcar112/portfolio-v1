import { Text } from '@src/ui/components'
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
    <Text type='subheading'>Key Features</Text>
    <FeatureList>
      {features.map((feature) => (
        <Text type='list-item' key={`feat-${feature}`}>
          {feature}
        </Text>
      ))}
    </FeatureList>
  </StyledProjectFeatures>
)
