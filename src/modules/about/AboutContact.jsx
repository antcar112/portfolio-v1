import { Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import styled from 'styled-components'

const StyledAboutContact = styled.section``

const AboutContactList = styled.ul`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  margin: 0 auto;
  padding: 25px;
  list-style: none;

  ${media.down.md} {
    flex-direction: column;
    align-items: center;
  }

  & a {
    text-decoration: none;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    position: relative;

    ${media.down.md} {
      justify-content: space-between;
      width: 130px;
    }

    ${media.down.sm} {
      font-size: 1em;

      & svg {
        font-size: 1.4em;
      }
    }
    & span,
    & svg {
      transition: color ease-in-out 250ms;
    }

    & svg {
      font-size: 1.7em;
      margin-right: 0.5em;
    }

    &::before {
      content: '';
      left: -10px;
      right: -10px;
      bottom: -10px;
      height: 2px;
      background: ${({ theme }) => theme.color.primary};
      position: absolute;
      transform: scaleX(0.4) translateY(5px);
      opacity: 0;
      transform-origin: 0;
      transition: transform ease-in-out 150ms, opacity ease-in-out 150ms;
    }

    &:hover,
    &:active,
    &:focus {
      & span,
      & svg {
        color: ${({ theme }) => theme.color.primary};
      }

      &::before {
        transform: scaleX(1) translateY(0);
        opacity: 1;
      }
    }
  }
`

export const AboutContact = () => (
  <StyledAboutContact>
    <Text center type='heading'>
      Get In Touch
    </Text>
    <Text center type='body'>
      I'd love to answer any questions you may have.
    </Text>
    <AboutContactList>
      <li>
        <a href='mailto:anthony.j.caron@gmail.com'>
          <IoMdMail />
          <span> Email</span>
        </a>
      </li>
      <li>
        <a href='https://github.com/antcar112' rel='noopener noreferrer' target='_blank'>
          <FaGithub />
          <span> GitHub</span>
        </a>
      </li>
      <li>
        <a
          href='https://www.linkedin.com/in/anthony-caron/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <FaLinkedin />
          <span> LinkedIn</span>
        </a>
      </li>
    </AboutContactList>
  </StyledAboutContact>
)
