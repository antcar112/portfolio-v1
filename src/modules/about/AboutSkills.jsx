import { techList } from '@src/data'
import { TechGrid, Text } from '@src/ui/components'
import React from 'react'

export const AboutSkills = () => (
  <section>
    <Text center type='heading'>
      My Skills
    </Text>
    <TechGrid page='about' tech={techList} />
  </section>
)
