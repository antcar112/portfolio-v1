import { Button, Card, Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const StyledWorkCard = styled(Card)`
  ${media.down.lg} {
    align-self: flex-start;
    margin: -100px auto -80px;
    width: 90%;
  }
`

export const WorkCard = ({ description, link, subtitle, title }) => (
  <StyledWorkCard>
    <Text card type='heading'>
      {title}
    </Text>
    <Text card type='subheading'>
      {subtitle}
    </Text>
    <Text card>{description}</Text>
    <Button direction='up' outline text='See More' to={link} />
  </StyledWorkCard>
)
