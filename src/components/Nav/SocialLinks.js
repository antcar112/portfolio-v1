import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  transition: ${({ theme }) => theme.hoverTransition};
  padding: 0 15px;
  font-size: 22px;

  &:hover {
    color: ${({ theme }) => theme.color.textSecondary};
  }
`

const SocialLinks = () => (
  <Fragment>
    <SocialLink href='https://github.com/antcar112' target='_blank' rel='noopener noreferrer'>
      <FaGithub />
    </SocialLink>
    <SocialLink href='https://www.linkedin.com/in/anthony-caron/' target='_blank' rel='noopener noreferrer'>
      <FaLinkedin />
    </SocialLink>
  </Fragment>
)

export default SocialLinks
