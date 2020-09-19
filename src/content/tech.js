import bootstrapSvg from '@src/images/tech/bootstrap.svg'
import cSvg from '@src/images/tech/c.svg'
import cssSvg from '@src/images/tech/css.svg'
import figmaSvg from '@src/images/tech/figma.svg'
import firebaseSvg from '@src/images/tech/firebase.svg'
import expressSvg from '@src/images/tech/express.svg'
import gatsbySvg from '@src/images/tech/gatsby.svg'
import graphqlSvg from '@src/images/tech/graphql.svg'
import htmlSvg from '@src/images/tech/html.svg'
import javaSvg from '@src/images/tech/java.svg'
import javascriptSvg from '@src/images/tech/javascript.svg'
import jestSvg from '@src/images/tech/jest.svg'
import materialUiSvg from '@src/images/tech/material-ui.svg'
import mobxSvg from '@src/images/tech/mobx.svg'
import mongodbSvg from '@src/images/tech/mongodb.svg'
import nodeSvg from '@src/images/tech/node.svg'
import oracleSvg from '@src/images/tech/oracle.svg'
import photoshopSvg from '@src/images/tech/photoshop.svg'
import pythonSvg from '@src/images/tech/python.svg'
import reactSvg from '@src/images/tech/react.svg'
import sassSvg from '@src/images/tech/sass.svg'
import styledComponentsSvg from '@src/images/tech/styled-components.svg'
import testingLibrarySvg from '@src/images/tech/testing-library.svg'
import typescriptSvg from '@src/images/tech/typescript.svg'

const tech = {
  react: {
    name: 'React',
    image: reactSvg,
    inProgress: false,
  },
  typescript: {
    name: 'TypeScript',
    image: typescriptSvg,
    inProgress: false,
  },
  javascript: {
    name: 'JavaScript',
    image: javascriptSvg,
    inProgress: false,
  },
  html: {
    name: 'HTML5',
    image: htmlSvg,
    inProgress: false,
  },
  css: {
    name: 'CSS3',
    image: cssSvg,
    inProgress: false,
  },
  sass: {
    name: 'Sass',
    image: sassSvg,
    inProgress: false,
  },
  materialUi: {
    name: 'Material UI',
    image: materialUiSvg,
    inProgress: false,
  },
  styledComponents: {
    name: 'Styled Components',
    image: styledComponentsSvg,
    inProgress: false,
  },
  bootstrap: {
    name: 'Bootstrap',
    image: bootstrapSvg,
    inProgress: false,
  },
  mobx: {
    name: 'MobX',
    image: mobxSvg,
    inProgress: false,
  },
  graphql: {
    name: 'GraphQL',
    image: graphqlSvg,
    inProgress: false,
  },
  gatsby: {
    name: 'Gatsby',
    image: gatsbySvg,
    inProgress: false,
  },
  node: {
    name: 'NodeJS',
    image: nodeSvg,
    inProgress: false,
  },
  express: {
    name: 'Express',
    image: expressSvg,
    inProgress: false,
    darkModeInvert: true,
  },
  java: {
    name: 'Java',
    image: javaSvg,
    inProgress: false,
  },
  python: {
    name: 'Python',
    image: pythonSvg,
    inProgress: true,
  },
  c: { name: 'C', image: cSvg, inProgress: true },
  oracle: {
    name: 'Oracle Database',
    image: oracleSvg,
    inProgress: false,
  },
  mongodb: {
    name: 'MongoDB',
    image: mongodbSvg,
    inProgress: false,
  },
  firebase: {
    name: 'Firebase',
    image: firebaseSvg,
    inProgress: false,
  },
  jest: {
    name: 'Jest',
    image: jestSvg,
    inProgress: true,
  },
  testingLibrary: {
    name: 'Testing Library',
    image: testingLibrarySvg,
    inProgress: true,
  },
  photoshop: {
    name: 'Abobe Photoshop',
    image: photoshopSvg,
    inProgress: false,
  },
  figma: {
    name: 'Figma',
    image: figmaSvg,
    inProgress: false,
  },
}

export const techList = [...Object.values(tech)]

export const timeegoTech = [
  tech.html,
  tech.css,
  tech.bootstrap,
  tech.javascript,
  tech.firebase,
  tech.figma,
]

export const codyTech = [
  tech.javascript,
  tech.react,
  tech.graphql,
  tech.gatsby,
  tech.styledComponents,
  tech.photoshop,
]

export const voltTech = [
  tech.javascript,
  tech.react,
  tech.node,
  tech.express,
  tech.mongodb,
  tech.styledComponents,
  tech.bootstrap,
  tech.python,
  tech.figma,
]

export const generalsTech = [tech.html, tech.css, tech.sass, tech.javascript, tech.photoshop]
