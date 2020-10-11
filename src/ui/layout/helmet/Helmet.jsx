import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

export const Helmet = ({ pageTitle }) => (
  <ReactHelmet>
    <meta charSet='utf-8' />
    <title>Anthony Caron - {pageTitle}</title>
    <meta
      content='HTML, CSS, JavaScript, React, Web Developer, Software Developer, Designer, Portfolio'
      name='keywords'
    />
    <meta content='Portfolio site for software developer Anthony Caron' name='description' />
    <meta content='Anthony Caron' name='author' />
  </ReactHelmet>
)
