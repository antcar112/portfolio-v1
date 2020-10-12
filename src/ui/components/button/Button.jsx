import React from 'react'
import { StyledAnchor, StyledButton, StyledLink } from './buttonStyles'
import { ButtonText } from './ButtonText'

export const Button = ({ children, handleClick, href, outline = false, to }) => {
  if (to) {
    return (
      <StyledLink outline={outline} to={to}>
        <ButtonText>{children}</ButtonText>
      </StyledLink>
    )
  }

  if (href) {
    return (
      <StyledAnchor href={href} outline={outline} rel='noopener noreferrer' target='_blank'>
        <ButtonText>{children}</ButtonText>
      </StyledAnchor>
    )
  }

  return (
    <StyledButton onClick={handleClick} outline={outline}>
      <ButtonText>{children}</ButtonText>
    </StyledButton>
  )
}
