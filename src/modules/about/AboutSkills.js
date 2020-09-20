import React from 'react'
import { Text, TechGrid } from '@src/ui/components'
import { techList } from '@src/data'

export const AboutSkills = () => (
  <section>
    <Text type='heading' center>
      My Skills
    </Text>
    <TechGrid tech={techList} page='about' />
  </section>
)
