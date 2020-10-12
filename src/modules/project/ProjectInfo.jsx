import { Button, SectionHeading, Text } from '@src/ui/components'
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

const ButtonContainer = styled.div`
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
    <SectionHeading title={title} />
    <Grid>
      <div>
        <Text type='h3'>{subtitle}</Text>
        <Text>{description}</Text>
      </div>
      <ButtonContainer>
        <Button href={hostedLink}>See website</Button>
        <Button href={githubLink} outline>
          View on GitHub
        </Button>
      </ButtonContainer>
    </Grid>
  </StyledProjectInfo>
)
