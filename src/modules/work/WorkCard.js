import React from 'react'
import styled from 'styled-components'

import { Button, Card, SectionTitle, SectionSubtitle, SectionParagraph } from '@src/ui/components'
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
    <SectionTitle card>{title}</SectionTitle>
    <SectionSubtitle card>{subtitle}</SectionSubtitle>
    <SectionParagraph card>{description}</SectionParagraph>
    <Button outline to={link} text='See More' direction='up' />
  </StyledWorkCard>
)
