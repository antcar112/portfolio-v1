import React from 'react'
import { SectionTitle, TechGrid } from '@src/ui/components'
import { techList } from '@src/data'

export const AboutSkills = () => (
  <section>
    <SectionTitle center>My Skills</SectionTitle>
    <TechGrid tech={techList} page='about' />
  </section>
)
