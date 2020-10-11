import { Button, Container, fun, Text } from '@src/ui/components'
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
      <Text style={{ marginBottom: '60px' }} type='page-subheading'>
        This page doesn't exist. {fun}
      </Text>
      <Button direction='up' outline text='Go Back' to='/' />
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
