import { Work, WorkHero } from '@src/modules/work'
import { Layout } from '@src/ui/layout'
import React from 'react'

const Home = () => (
  <Layout pageTitle='Work'>
    <WorkHero />
    <Work />
  </Layout>
)

export default Home
