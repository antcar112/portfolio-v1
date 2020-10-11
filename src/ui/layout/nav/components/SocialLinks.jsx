import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styled from 'styled-components'

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

export const SocialLinks = () => (
  <>
    <SocialLink href='https://github.com/antcar112' rel='noopener noreferrer' target='_blank'>
      <FaGithub />
    </SocialLink>
    <SocialLink
      href='https://www.linkedin.com/in/anthony-caron/'
      rel='noopener noreferrer'
      target='_blank'
    >
      <FaLinkedin />
    </SocialLink>
  </>
)
