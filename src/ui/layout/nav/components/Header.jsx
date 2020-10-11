import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.bg};
  position: fixed;
  z-index: 10;
  overflow: hidden;
  transition: ${({ theme }) => theme.hoverTransition};
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 150px;
  height: 100%;

  ${media.down.lg} {
    padding: 0 90px 0 100px;
  }
  ${media.down.md} {
    padding: 0 10px 0 20px;
  }
`

export const Header = ({ children }) => (
  <StyledHeader>
    <HeaderContainer>{children}</HeaderContainer>
  </StyledHeader>
)
