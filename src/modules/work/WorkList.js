import React from 'react'

import { projectList } from '@src/data'
import { WorkItem } from '@src/modules/work'

export const WorkList = () => (
  <div>
    {projectList.map((project, index) => (
      <WorkItem project={project} index={index} key={project.title} />
    ))}
  </div>
)
