import { Text } from '@src/ui/components'
import React from 'react'

export const PageHeading = ({ subtitle, title }) => (
  <>
    <Text center type='h1'>
      {title}
    </Text>
    {subtitle && (
      <Text center color='primary' type='h2' weight={400}>
        {subtitle}
      </Text>
    )}
  </>
)
