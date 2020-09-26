import React from 'react'
import styled from 'styled-components'

import { Button, Card, Text } from '@src/ui/components'
import { media } from '@src/utils'

const StyledWorkCard = styled(Card)`
  ${media.down.lg} {
    align-self: flex-start;
    margin: -100px auto -80px;
    width: 90%;
  }
`

export const WorkCard = ({ title, subtitle, description, link }) => (
  <StyledWorkCard>
    <Text type='heading' card>
      {title}
    </Text>
    <Text type='subheading' card>
      {subtitle}
    </Text>
    <Text card>{description}</Text>
    <Button outline to={link} text='See More' direction='up' />
  </StyledWorkCard>
)
