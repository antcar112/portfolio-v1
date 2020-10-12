import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { StyledAnchor, StyledAniLink, StyledButton } from './buttonStyles'

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
