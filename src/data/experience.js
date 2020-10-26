import { experienceAssets } from '@src/assets/experience'

const experience = {
  atb: {
    jobTitle: 'Junior Software Developer',
    company: 'ATB Financial',
    companyUrl: 'https://www.atb.com/personal/',
    date: 'May 2020 - Present',
    logo: experienceAssets.atb,
    description: [
      'Used React, TypeScript, MobX & Material-UI while working on the front-end team',
      'Updated and improved design of existing application for better UX and performance',
      'Converted legacy app from JavaScript into TypeScript to improve code scalability and quality',
      'Updated existing search to use ElasticSearch API for improved performance and search functionality',
      'Designed and developed a rich text-editor using Slate.js',
      'Used Jest and React Testing Library to add unit tests to existing legacy code',
    ],
  },
}

export const experienceList = Object.values(experience)
