import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { volt } = projects

const Volt = () => (
  <Layout pageTitle={volt.title}>
    <Project project={volt} tech={projectTech.volt} />
  </Layout>
)

export default Volt
