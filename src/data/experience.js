import { experienceAssets } from '@src/assets/experience'

const experience = {
  rivian: {
    jobTitle: 'Software Engineer II',
    company: 'Rivian',
    companyUrl: 'https://www.rivian.com',
    date: 'August 2021 - Present',
    logo: experienceAssets.rivian,
    description: [
      'Developed React front end micro-apps using TypeScript & Material-UI',
      'Leverage GraphQL and Apollo client for fetching and caching data',
    ],
  },
  atb: {
    jobTitle: 'Software Developer II',
    company: 'ATB Financial',
    companyUrl: 'https://www.atb.com/personal/',
    date: 'May 2020 - August 2021',
    logo: experienceAssets.atb,
    description: [
      'Developed React front end using TypeScript, MobX, React Query, Jotai, Material-UI & AntD',
      'Collaborated with Product & Design to architect technical solutions for upcoming features',
      'Updated and improved design of existing application for better UX and performance',
      'Proposed and added React Query to application for improved caching, performance and UX',
      'Converted legacy app from JavaScript into TypeScript to improve code scalability and quality',
      'Updated existing search to use ElasticSearch API for improved performance and search functionality',
      'Designed and developed a rich text-editor using Slate.js',
      'Used Jest and React Testing Library to add unit tests to existing legacy code',
    ],
  },
}

export const experienceList = Object.values(experience)
