import React from 'react'

import WorkItem from 'src/components/Work/WorkItem'
import projects from 'src/content/projects.js'

const WorkList = () => (
  <div>
    {projects.map((project, index) => (
      <WorkItem project={project} index={index} key={project.title} />
    ))}
  </div>
)

export default WorkList
