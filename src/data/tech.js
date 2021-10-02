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
    name: 'SCSS',
    image: techLogos.sass,
  },
  less: {
    name: 'Less',
    image: techLogos.less,
  },
  materialUi: {
    name: 'Material UI',
    image: techLogos.materialUi,
  },
  antd: {
    name: 'Ant Design',
    image: techLogos.antd,
  },
  styledComponents: {
    name: 'Styled Components',
    image: techLogos.styledComponents,
  },
  bootstrap: {
    name: 'Bootstrap',
    image: techLogos.bootstrap,
  },
  graphql: {
    name: 'GraphQL',
    image: techLogos.graphql,
  },
  apollo: {
    name: 'Apollo',
    image: techLogos.apollo,
    darkModeInvert: true,
  },
  reactQuery: {
    name: 'React Query',
    image: techLogos.reactQuery,
  },
  jotai: {
    name: 'Jotai',
    image: techLogos.jotai,
    darkModeInvert: true,
  },
  mobx: {
    name: 'MobX',
    image: techLogos.mobx,
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
  jest: {
    name: 'Jest',
    image: techLogos.jest,
  },
  testingLibrary: {
    name: 'Testing Library',
    image: techLogos.testingLibrary,
  },
  java: {
    name: 'Java',
    image: techLogos.java,
  },
  // python: {
  //   name: 'Python',
  //   image: techLogos.python,
  //   inProgress: true,
  // },
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
