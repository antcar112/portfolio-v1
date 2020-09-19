import { bigGenerals, generalsTech } from '@src/content'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const BigGenerals = () => (
  <Layout pageTitle="Big General's">
    <Project project={bigGenerals} tech={generalsTech} />
  </Layout>
)

export default BigGenerals
