import { volt, voltTech } from '@src/content'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const Volt = () => (
  <Layout pageTitle='Volt'>
    <Project project={volt} tech={voltTech} />
  </Layout>
)

export default Volt
