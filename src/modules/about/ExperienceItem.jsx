import { Text } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const ExperienceContainer = styled.ul`
  max-width: 1000px;
`

const ExperienceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6em;
`

const ImageContainer = styled.div`
  height: 72px;
  margin-right: 1.2em;

  img {
    max-height: 100%;
    max-width: auto;
  }
`

const ExperienceList = styled.ul`
  list-style-type: square;
  padding-left: 1.4em;
`

export const ExperienceItem = ({ experience }) => {
  const { company, companyUrl, date, description, jobTitle, logo } = experience
  return (
    <ExperienceContainer>
      <ExperienceHeader>
        <ImageContainer>
          <img src={logo} />
        </ImageContainer>
        <div>
          <Text color='text' type='h4'>
            {jobTitle} @ <Text href={companyUrl}>{company}</Text>
          </Text>
          <Text type='body2'>{date}</Text>
        </div>
      </ExperienceHeader>
      <ExperienceList>
        {description.map((text, index) => (
          <Text key={`${company}--${index}`} type='list-item'>
            {text}
          </Text>
        ))}
      </ExperienceList>
    </ExperienceContainer>
  )
}
