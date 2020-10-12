import React from 'react'
import {
  H4,
  Heading,
  Link,
  ListItem,
  PageHeading,
  PageSubheading,
  Paragraph,
  Span,
  SubBody,
  Subheading,
} from './textStyles'

const styledText = {
  body: Paragraph,
  body2: SubBody,
  'list-item': ListItem,
  heading: Heading,
  subheading: Subheading,
  'page-heading': PageHeading,
  'page-subheading': PageSubheading,
  span: Span,
  h4: H4,
}

const getTextComponent = (type) => styledText[type] || styledText.body

export const Text = ({ children, href, type = 'body', ...props }) => {
  const TextComponent = href ? Link : getTextComponent(type)
  const textProps = href ? { ...props, rel: 'noopener noreferrer', target: '_blank', href } : props

  return <TextComponent {...textProps}>{children}</TextComponent>
}
