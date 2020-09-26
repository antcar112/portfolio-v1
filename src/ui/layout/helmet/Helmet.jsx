import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export const Helmet = ({ pageTitle }) => (
  <ReactHelmet>
    <meta charSet='utf-8' />
    <title>Anthony Caron - {pageTitle}</title>
    <meta
      name='keywords'
      content='HTML, CSS, JavaScript, React, Web Developer, Software Developer, Designer, Portfolio'
    />
    <meta name='description' content='Portfolio site for software developer Anthony Caron' />
    <meta name='author' content='Anthony Caron' />
  </ReactHelmet>
)
