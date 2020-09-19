import { timeego, timeegoTech } from '@src/content'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const Timeego = () => (
  <Layout pageTitle='Timeego'>
    <Project project={timeego} tech={timeegoTech} />
  </Layout>
)

export default Timeego
