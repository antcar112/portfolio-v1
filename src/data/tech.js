import { techLogos } from '@src/assets/tech-logos'

const tech = {
  react: {
    name: 'React',
    image: techLogos.react,
    inProgress: false,
  },
  typescript: {
    name: 'TypeScript',
    image: techLogos.typescript,
    inProgress: false,
  },
  javascript: {
    name: 'JavaScript',
    image: techLogos.javascript,
    inProgress: false,
  },
  html: {
    name: 'HTML5',
    image: techLogos.html,
    inProgress: false,
  },
  css: {
    name: 'CSS3',
    image: techLogos.css,
    inProgress: false,
  },
  sass: {
    name: 'Sass',
    image: techLogos.sass,
    inProgress: false,
  },
  materialUi: {
    name: 'Material UI',
    image: techLogos.materialUi,
    inProgress: false,
  },
  styledComponents: {
    name: 'Styled Components',
    image: techLogos.styledComponents,
    inProgress: false,
  },
  bootstrap: {
    name: 'Bootstrap',
    image: techLogos.bootstrap,
    inProgress: false,
  },
  mobx: {
    name: 'MobX',
    image: techLogos.mobx,
    inProgress: false,
  },
  graphql: {
    name: 'GraphQL',
    image: techLogos.graphql,
    inProgress: false,
  },
  gatsby: {
    name: 'Gatsby',
    image: techLogos.gatsby,
    inProgress: false,
  },
  node: {
    name: 'NodeJS',
    image: techLogos.node,
    inProgress: false,
  },
  express: {
    name: 'Express',
    image: techLogos.express,
    inProgress: false,
    darkModeInvert: true,
  },
  java: {
    name: 'Java',
    image: techLogos.java,
    inProgress: false,
  },
  python: {
    name: 'Python',
    image: techLogos.python,
    inProgress: true,
  },
  c: { name: 'C', image: techLogos.c, inProgress: true },
  oracle: {
    name: 'Oracle Database',
    image: techLogos.oracle,
    inProgress: false,
  },
  mongodb: {
    name: 'MongoDB',
    image: techLogos.mongodb,
    inProgress: false,
  },
  firebase: {
    name: 'Firebase',
    image: techLogos.firebase,
    inProgress: false,
  },
  jest: {
    name: 'Jest',
    image: techLogos.jest,
    inProgress: true,
  },
  testingLibrary: {
    name: 'Testing Library',
    image: techLogos.testingLibrary,
    inProgress: true,
  },
  photoshop: {
    name: 'Abobe Photoshop',
    image: techLogos.photoshop,
    inProgress: false,
  },
  figma: {
    name: 'Figma',
    image: techLogos.figma,
    inProgress: false,
  },
}

export const techList = Object.values(tech)

export const projectTech = {
  bigGenerals: [tech.html, tech.css, tech.sass, tech.javascript, tech.photoshop],
  codyCameron: [
    tech.javascript,
    tech.react,
    tech.graphql,
    tech.gatsby,
    tech.styledComponents,
    tech.photoshop,
  ],
  timeego: [tech.html, tech.css, tech.bootstrap, tech.javascript, tech.firebase, tech.figma],
  volt: [
    tech.javascript,
    tech.react,
    tech.node,
    tech.express,
    tech.mongodb,
    tech.styledComponents,
    tech.bootstrap,
    tech.python,
    tech.figma,
  ],
}
