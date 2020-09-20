import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { codyCameron } = projects

const CodyCameron = () => (
  <Layout pageTitle={codyCameron.title}>
    <Project project={codyCameron} tech={projectTech.codyCameron} />
  </Layout>
)

export default CodyCameron
