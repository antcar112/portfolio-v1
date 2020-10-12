import React from 'react'
import { Body, H1, H2, H3, H4, Link, ListItem, Span, Subtitle } from './textStyles'

const styledText = {
  body: Body,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  'list-item': ListItem,
  span: Span,
  subtitle: Subtitle,
}

const getTextComponent = (type) => styledText[type] || styledText.body

export const Text = ({ children, href, type = 'body', ...props }) => {
  const TextComponent = href ? Link : getTextComponent(type)
  const textProps = href
    ? { ...props, type: 'link', href, rel: 'noopener noreferrer', target: '_blank' }
    : { ...props, type }

  return <TextComponent {...textProps}>{children}</TextComponent>
}
