import anthony from '@src/assets/images/anthony.jpg'
import { Card, Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const StyledAboutIntro = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  align-items: flex-end;
  margin: 30px auto 100px;
  grid-template-areas: 'image card';

  ${media.down.lg} {
    margin: 30px auto 50px;
  }

  ${media.down.md} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image' 'card';
    grid-gap: 25px;
  }
`

const AboutImage = styled.img`
  max-width: 500px;
  position: relative;
  justify-self: flex-end;
  grid-area: image;
  right: -25px;

  ${media.down.lg} {
    max-width: 400px;
    align-self: center;
    right: 0;
  }
  ${media.down.md} {
    justify-self: center;
    max-width: 300px;
  }
`

const AboutCard = styled(Card)`
  width: 100%;
  max-width: 550px;
  justify-self: flex-start;
  position: relative;
  left: -25px;
  top: 50px;

  & h2 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: 400;
    color: ${({ theme }) => theme.color.text};
    font-size: 3em;
    margin: 6px 0 20px;

    & span {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  ${media.down.lg} {
    left: 0;
    top: 0;

    & h2 {
      font-size: 2.8em;
    }
  }

  ${media.down.md} {
    justify-self: center;
  }

  ${media.down.sm} {
    & h2 {
      font-size: 2.5em;
    }
  }
`

export const AboutIntro = () => (
  <StyledAboutIntro>
    <AboutImage alt='Anthony' src={anthony} />
    <AboutCard>
      <h2>
        I'm <span>Anthony</span>,
      </h2>
      <Text>
        a software developer and designer. I am currently earning a{' '}
        <Text className='bold' href='https://www.bcit.ca/study/programs/5500dipma'>
          Computer Systems Technology
        </Text>{' '}
        diploma at the{' '}
        <Text className='bold' href='https://www.bcit.ca/'>
          British Columbia Institute of Technology
        </Text>
        .
      </Text>
      <Text>
        I love how developing software allows me to build something new from scratch. I also
        enjoying the constant problem solving and learning.
      </Text>
      <Text>
        I currently live in the greater <Text type='highlight'>Vancouver</Text> area. In my spare
        time, I enjoy playing guitar and drums, watching hockey, exploring new types of music,
        running and cooking.
      </Text>
    </AboutCard>
  </StyledAboutIntro>
)

export default AboutIntro
