const defaultStyles = {
  h1: {
    color: 'text',
    weight: 700,
  },
  h2: {
    color: 'text',
    weight: 700,
    marginBottom: {
      card: '8px',
      normal: '0.4rem',
    },
  },
  h3: {
    color: 'primary',
    weight: 400,
    marginBottom: {
      card: '30px',
      normal: '16px',
    },
  },
  h4: {
    color: 'text',
    weight: 400,
    marginBottom: {
      card: '0.2em',
      normal: '0.2em',
    },
  },
  subtitle: {
    color: 'textSecondary',
    weight: 400,
  },
  span: {
    color: 'primary',
    weight: 700,
  },
  link: {
    color: 'primary',
    weight: 700,
    textDecoration: 'underline',
  },
  listItem: {
    color: 'text',
    weight: 400,
    marginBottom: {
      card: '0.7em',
      normal: '0.7em',
    },
  },
  body: {
    color: 'text',
    weight: 400,
    marginBottom: {
      card: '30px',
      normal: '1.4em',
    },
  },
}

const getDefaultStyles = (textType, style) => {
  switch (textType) {
    case 'h1':
      return defaultStyles.h1[style]
    case 'h2':
      return defaultStyles.h2[style]
    case 'h3':
      return defaultStyles.h3[style]
    case 'h4':
      return defaultStyles.h4[style]
    case 'subtitle':
      return defaultStyles.subtitle[style]
    case 'span':
      return defaultStyles.span[style]
    case 'link':
      return defaultStyles.link[style]
    case 'list-item':
      return defaultStyles.listItem[style]
    case 'body':
    default:
      return defaultStyles.body[style]
  }
}

export const getColor = ({ color, theme, type }) => {
  const defaultColor = theme.color[getDefaultStyles(type, 'color') || 'text']
  return color ? theme.color[color] || defaultColor : defaultColor
}

export const getFontWeight = ({ type, weight }) => weight || getDefaultStyles(type, 'weight') || 400

export const getMarginBottom = ({ marginBottom, type }) => {
  const defaultMargins = getDefaultStyles(type, 'marginBottom') || { card: 0, normal: 0 }
  const { card, normal } = defaultMargins
  return marginBottom === 'card' ? card : marginBottom === 'none' ? '0px' : normal
}

export const getTextAlign = ({ center }) => (center ? 'center' : 'left')

export const getTextDecoration = ({ decoration, type }) =>
  decoration || getDefaultStyles(type, 'textDecoration') || 'none'
