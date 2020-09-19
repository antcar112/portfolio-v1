import React, { useContext } from 'react'
import styled from 'styled-components'

import { GlobalThemeContext } from '@src/context/GlobalContextProvider'
import { media } from '@src/utils'

const StyledTechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    height: 45px;
    filter: ${({ colorTheme, invert }) => (colorTheme === 'dark' && invert ? 'invert(1)' : '')}
      grayscale(100%);
    transition: 150ms filter linear;

    ${media.down.md} {
      filter: ${({ colorTheme, invert }) => (colorTheme === 'dark' && invert ? 'invert(1)' : '')}
        grayscale(0);
    }
    ${media.down.xs} {
      height: 35px;
    }
  }

  & span {
    transform: translateY(-10px);
    opacity: 0;
    text-align: center;
    transition: transform 150ms ease-in-out, opacity 100ms ease-in-out 50ms;

    ${media.down.md} {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  & span.tech_name {
    margin-top: 12px;
    color: ${({ theme }) => theme.color.text};
    font-size: 16px;

    ${media.down.sm} {
      font-size: 15px;
    }
  }

  & span.in_progress {
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 12px;

    ${media.down.sm} {
      font-size: 10px;
    }
  }
  &:hover {
    & img {
      filter: ${({ colorTheme, invert }) => (colorTheme === 'dark' && invert ? 'invert(1)' : '')}
        grayscale(0);
    }
    & span {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

export const TechItem = ({ tech: { darkModeInvert, image, inProgress, name }, showInProgress }) => {
  const theme = useContext(GlobalThemeContext)
  return (
    <StyledTechItem colorTheme={theme.theme} invert={darkModeInvert}>
      <img src={image} alt={name} />
      <span className='tech_name'>{name}</span>
      {showInProgress && inProgress && <span className='in_progress'>In Progress</span>}
    </StyledTechItem>
  )
}
