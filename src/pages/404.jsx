import { Button, Container, Text } from '@src/ui/components'
import { Layout } from '@src/ui/layout'
import React from 'react'
import styled from 'styled-components'

const NotFoundContainer = styled(Container)`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const NotFoundPage = () => (
  <Layout pageTitle='Page Not Found'>
    <NotFoundContainer>
      <Text type='page-heading'>404 error</Text>
      <Text type='page-subheading' style={{ marginBottom: '60px' }}>
        This page doesn't exist.
      </Text>
      <Button to='/' outline direction='up' text='Go Back' />
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
