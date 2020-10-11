import { projectList } from '@src/data'
import { WorkItem } from '@src/modules/work'
import React from 'react'

export const WorkList = () => (
  <div>
    {projectList.map((project, index) => (
      <WorkItem index={index} key={project.title} project={project} />
    ))}
  </div>
)
