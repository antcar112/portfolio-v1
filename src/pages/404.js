import React from 'react'

import { Button, Container, SectionTitle, SectionSubtitle } from '@src/ui/components'
import { Layout } from '@src/ui/layout'

const NotFoundPage = () => (
  <Layout pageTitle='Page Not Found'>
    <Container>
      <SectionTitle>404 error</SectionTitle>
      <SectionSubtitle style={{ marginBottom: '60px' }}>This page doesn't exist.</SectionSubtitle>
      <Button to='/' outline direction='up' text='Go Back' />
    </Container>
  </Layout>
)

export default NotFoundPage
