import { experienceList } from '@src/data'
import { ExperienceItem } from '@src/modules/about'
import { SectionHeading } from '@src/ui/components'
import React from 'react'
import styled from 'styled-components'

const Experiences = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const AboutExperience = () => (
  <section>
    <SectionHeading center title='My Experience' />
    <Experiences>
      {experienceList.map((exp) => (
        <ExperienceItem experience={exp} key={exp.company} />
      ))}
    </Experiences>
  </section>
)
