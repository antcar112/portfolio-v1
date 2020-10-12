import { Text } from '@src/ui/components'
import React from 'react'

export const SectionHeading = ({ center, marginBottom, subtitle, title }) => {
  return (
    <>
      <Text center={center} marginBottom={marginBottom} type='h2'>
        {title}
      </Text>
      {subtitle && (
        <Text center={center} marginBottom={marginBottom} type='h3'>
          {subtitle}
        </Text>
      )}
    </>
  )
}
