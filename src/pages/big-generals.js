import { projects, projectTech } from '@src/data'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const { bigGenerals } = projects

const BigGenerals = () => (
  <Layout pageTitle={bigGenerals.title}>
    <Project project={bigGenerals} tech={projectTech.bigGenerals} />
  </Layout>
)

export default BigGenerals
