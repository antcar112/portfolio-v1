import { techLogos } from '@src/assets/tech-logos'

const tech = {
  react: {
    name: 'React',
    image: techLogos.react,
  },
  typescript: {
    name: 'TypeScript',
    image: techLogos.typescript,
  },
  javascript: {
    name: 'JavaScript',
    image: techLogos.javascript,
  },
  html: {
    name: 'HTML5',
    image: techLogos.html,
  },
  css: {
    name: 'CSS3',
    image: techLogos.css,
  },
  sass: {
    name: 'Sass',
    image: techLogos.sass,
  },
  materialUi: {
    name: 'Material UI',
    image: techLogos.materialUi,
  },
  styledComponents: {
    name: 'Styled Components',
    image: techLogos.styledComponents,
  },
  bootstrap: {
    name: 'Bootstrap',
    image: techLogos.bootstrap,
  },
  mobx: {
    name: 'MobX',
    image: techLogos.mobx,
  },
  graphql: {
    name: 'GraphQL',
    image: techLogos.graphql,
  },
  gatsby: {
    name: 'Gatsby',
    image: techLogos.gatsby,
  },
  node: {
    name: 'NodeJS',
    image: techLogos.node,
  },
  express: {
    name: 'Express',
    image: techLogos.express,
    darkModeInvert: true,
  },
  java: {
    name: 'Java',
    image: techLogos.java,
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
  },
  mongodb: {
    name: 'MongoDB',
    image: techLogos.mongodb,
  },
  firebase: {
    name: 'Firebase',
    image: techLogos.firebase,
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
  },
  figma: {
    name: 'Figma',
    image: techLogos.figma,
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
