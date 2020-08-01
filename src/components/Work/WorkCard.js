import React from 'react'
import styled from 'styled-components'

import Button from 'src/components/Button/Button'
import Card from 'src/components/Card/Card'
import { SectionTitle, SectionSubtitle, SectionParagraph } from 'src/components/Text/Text'
import { media } from 'src/utils/media.js'

const StyledWorkCard = styled(Card)`
  ${media.down.lg} {
    align-self: flex-start;
    margin: -100px auto -80px;
    width: 90%;
  }
`

const WorkCard = ({ title, subtitle, description, link }) => (
  <StyledWorkCard>
    <SectionTitle card>{title}</SectionTitle>
    <SectionSubtitle card>{subtitle}</SectionSubtitle>
    <SectionParagraph card>{description}</SectionParagraph>
    <Button outline to={link} text='See More' direction='up' />
  </StyledWorkCard>
)

export default WorkCard
