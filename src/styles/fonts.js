import { css } from 'styled-components'

const karlaWeightsNormal = {
  400: '/fonts/Karla/Karla-Regular.tff',
  700: '/fonts/Karla/Karla-Bold.tff',
}

const rubikWeightsNormal = {
  400: '/fonts/Rubik/Rubik-Regular.tff',
  700: '/fonts/Rubik/Rubik-Bold.tff',
}

const karla = {
  name: 'Karla',
  normal: karlaWeightsNormal,
}

const rubik = {
  name: 'Rubik',
  normal: rubikWeightsNormal,
}

const createFontFaces = (font, fontType = 'normal') =>
  Object.keys(font[fontType])
    .map(
      (weight) => `
      @font-face {
        font-family: ${font.name};
        src: url(${font[fontType][weight]}) format('truetype');
        font-weight: ${weight};
        font-style: ${fontType};
        font-display: auto;
      }`
    )
    .join(' ')

export const fonts = css`
  ${createFontFaces(karla)}
  ${createFontFaces(rubik)}
`
