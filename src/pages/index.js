import React from 'react'

import { Layout } from '@src/ui/layout'
import { WorkHero, Work } from '@src/modules/work'

const Home = () => (
  <Layout pageTitle='Work'>
    <WorkHero />
    <Work />
  </Layout>
)

export default Home
