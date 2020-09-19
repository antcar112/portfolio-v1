import { codyCameron, codyTech } from '@src/content'
import { Project } from '@src/modules/project'
import { Layout } from '@src/ui/layout'
import React from 'react'

const CodyCameron = () => (
  <Layout pageTitle='Cody Cameron'>
    <Project project={codyCameron} tech={codyTech} />
  </Layout>
)

export default CodyCameron
