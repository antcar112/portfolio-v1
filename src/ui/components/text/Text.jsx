import {
  Heading,
  Hightlight,
  Link,
  ListItem,
  PageHeading,
  PageSubheading,
  Paragraph,
  Subheading,
} from '@src/ui/components/text/textStyles'
import React from 'react'

const styledText = {
  body: Paragraph,
  'list-item': ListItem,
  heading: Heading,
  subheading: Subheading,
  'page-heading': PageHeading,
  'page-subheading': PageSubheading,
  highlight: Hightlight,
}

const getTextComponent = (type) => styledText[type] || styledText.body

export const Text = ({ children, href, type = 'body', ...props }) => {
  const TextComponent = href ? Link : getTextComponent(type)
  return (
    <TextComponent {...props} href={href}>
      {children}
    </TextComponent>
  )
}
