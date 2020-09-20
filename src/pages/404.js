import React from 'react'

import { Button, Container, Text } from '@src/ui/components'
import { Layout } from '@src/ui/layout'

const NotFoundPage = () => (
  <Layout pageTitle='Page Not Found'>
    <Container
      style={{
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text type='page-heading'>404 error</Text>
      <Text type='page-subheading' style={{ marginBottom: '60px' }}>
        This page doesn't exist.
      </Text>
      <Button to='/' outline direction='up' text='Go Back' />
    </Container>
  </Layout>
)

export default NotFoundPage
