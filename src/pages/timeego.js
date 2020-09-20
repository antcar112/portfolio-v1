import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { timeego } = projects

const Timeego = () => (
  <Layout pageTitle={timeego.title}>
    <Project project={timeego} tech={projectTech.timeego} />
  </Layout>
)

export default Timeego
