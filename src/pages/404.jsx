import { Button, Container, PageHeading } from '@src/ui/components'
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

const HeadingContainer = styled.div`
  margin-bottom: 60px;
`

const NotFoundPage = () => (
  <Layout pageTitle='Page Not Found'>
    <NotFoundContainer>
      <HeadingContainer>
        <PageHeading subtitle="This page doesn't exist." title='404 error' />
      </HeadingContainer>
      <Button direction='up' outline text='Go Back' to='/' />
    </NotFoundContainer>
  </Layout>
)

export default NotFoundPage
