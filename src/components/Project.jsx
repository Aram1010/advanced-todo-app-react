import React from 'react'

const Project = ({project}) => {
  return (
    <div>
        <span className="">•</span>
      <span className="">{project.name}</span>
    </div>
  )
}

export default Project