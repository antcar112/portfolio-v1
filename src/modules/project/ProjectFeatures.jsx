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
    <Text type='h3'>Key Features</Text>
    <FeatureList>
      {features.map((feature) => (
        <Text key={`feat-${feature}`} type='list-item'>
          {feature}
        </Text>
      ))}
    </FeatureList>
  </StyledProjectFeatures>
)
