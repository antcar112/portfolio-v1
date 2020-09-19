import React from 'react'

import { projects } from '@src/content'
import { WorkItem } from '@src/modules/work'

export const WorkList = () => (
  <div>
    {projects.map((project, index) => (
      <WorkItem project={project} index={index} key={project.title} />
    ))}
  </div>
)
