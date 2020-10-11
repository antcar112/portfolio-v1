import { Button, Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const StyledProjectInfo = styled.section`
  width: 100%;
  margin: 10px auto 0;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 100px;
  width: 100%;
  grid-template-columns: 2fr 1fr;

  ${media.down.md} {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`

const Buttons = styled.div`
  display: grid;
  grid-gap: 15px;
  align-self: start;
  justify-self: end;

  ${media.down.md} {
    grid-template-columns: 1fr 1fr;
    justify-self: start;
  }
  ${media.down.sm} {
    justify-self: stretch;
  }
  ${media.down.xs} {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

export const ProjectInfo = ({ description, githubLink, hostedLink, subtitle, title }) => (
  <StyledProjectInfo>
    <Text type='heading'>{title}</Text>
    <Grid>
      <div>
        <Text type='subheading'>{subtitle}</Text>
        <Text>{description}</Text>
      </div>
      <Buttons>
        <Button href={hostedLink} text='See Website' />
        <Button href={githubLink} outline text='View on GitHub' />
      </Buttons>
    </Grid>
  </StyledProjectInfo>
)
