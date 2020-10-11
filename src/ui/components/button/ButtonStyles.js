import { media } from '@src/utils'
import { css } from 'styled-components'

const SharedBtnStyles = css`
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-decoration: none;
  transition: ${({ theme }) => theme.hoverTransition}, border-color 300ms linear;
  overflow: hidden;
  width: 250px;
  height: 60px;

  &::after {
    content: '';
    position: absolute;
    z-index: 1;
    top: 0;
    bottom: 0;
    left: 110%;
    width: 120%;
    transition: all 375ms;
  }

  &:hover::after,
  &:active::after,
  &:focus::after {
    left: -10%;
  }

  & div {
    width: 100%;
    height: 100%;
    display: inline-block;
    display: grid;
    place-items: center center;
    pointer-events: none;
  }

  & span {
    display: inline-block;
    font-size: 1.1em;
    pointer-events: none;
  }

  & .btn_text--default {
    transition: transform 500ms, opacity 250ms 120ms;
    opacity: 1;
  }

  &:hover .btn_text--default,
  &:active .btn_text--default,
  &:focus .btn_text--default {
    opacity: 0;
    transform: translateX(-20%);
    transition: transform 500ms, opacity 250ms;
  }

  & .btn_text--hidden {
    position: absolute;
    transition: right 500ms, opacity 250ms;
    opacity: 0;
    right: -20%;
    top: 0;
    z-index: 2;
  }

  &:hover .btn_text--hidden,
  &:active .btn_text--hidden,
  &:focus .btn_text--hidden {
    right: 0;
    opacity: 1;
    transition: right 500ms, opacity 250ms 120ms;
  }

  ${media.down.sm} {
    height: 50px;
    width: 100%;

    & span {
      font-size: 1em;
    }
  }
`

export const BtnSolidStyles = css`
  ${SharedBtnStyles};
  border: none;
  background: ${({ theme }) => theme.color.primary};

  &::after {
    background: ${({ theme }) => theme.color.primaryDarkened};
  }

  & span {
    color: white;
  }
`

export const BtnOutlineStyles = css`
  ${SharedBtnStyles};
  border: 4px solid ${({ theme }) => theme.color.primary};
  background: none;

  &:hover {
    border-color: ${({ theme }) => theme.color.primaryDarkened};
  }

  &::after {
    background: ${({ theme }) => theme.color.primaryDarkened};
  }
  & div {
    width: 100%;
  }

  & .btn_text--default {
    & span {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  & .btn_text--hidden {
    & span {
      color: white;
    }
  }
`
