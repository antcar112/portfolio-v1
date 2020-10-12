import { Text } from '@src/ui/components'
import React from 'react'

export const SectionHeading = ({ subtitle, title, ...props }) => (
  <>
    <Text {...props} type='h2'>
      {title}
    </Text>
    {subtitle && (
      <Text {...props} type='h3'>
        {subtitle}
      </Text>
    )}
  </>
)
