import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { BtnSolidStyles, BtnOutlineStyles } from './buttonStyles'

const StyledButton = styled.button`
  ${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`

const StyledAnchor = styled.a`
  ${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`

const StyledAniLink = styled(AniLink)`
  ${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`

export const Button = ({ outline = false, to, href, text, direction, handleClick }) => {
  const themeContext = useContext(ThemeContext)
  if (to) {
    return (
      <StyledAniLink
        to={to}
        outline={outline}
        cover
        direction={direction}
        bg={themeContext.color.primary}
        duration={0.8}
      >
        <ButtonText text={text} />
      </StyledAniLink>
    )
  }

  if (href) {
    return (
      <StyledAnchor href={href} outline={outline} target='_blank' rel='noopener noreferrer'>
        <ButtonText text={text} />
      </StyledAnchor>
    )
  }

  return (
    <StyledButton onClick={handleClick} outline={outline}>
      <ButtonText text={text} />
    </StyledButton>
  )
}

const ButtonText = ({ text }) => (
  <>
    <div className='btn_text--default'>
      <span>{text}</span>
    </div>
    <div className='btn_text--hidden'>
      <span>{text}</span>
    </div>
  </>
)
