import { BtnOutlineStyles, BtnSolidStyles } from '@src/ui/components/button/buttonStyles'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const StyledButton = styled.button`
  ${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`

const StyledAnchor = styled.a`
  ${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`

const StyledAniLink = styled(AniLink)`
  ${({ outline }) => (outline ? BtnOutlineStyles : BtnSolidStyles)};
`

export const Button = ({ direction, handleClick, href, outline = false, text, to }) => {
  const themeContext = useContext(ThemeContext)
  if (to) {
    return (
      <StyledAniLink
        bg={themeContext.color.primary}
        cover
        direction={direction}
        duration={0.8}
        outline={outline}
        to={to}
      >
        <ButtonText text={text} />
      </StyledAniLink>
    )
  }

  if (href) {
    return (
      <StyledAnchor href={href} outline={outline} rel='noopener noreferrer' target='_blank'>
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
