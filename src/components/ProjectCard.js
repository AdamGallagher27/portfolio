import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {

  const navigate = useNavigate()

  useEffect(() => {
    console.log(project)
  }, [])

  const handleClick = () => {
    navigate(`/projects/${project.slug}`, { replace: true })
  }

  return (
    <div>
      <p>{project.title}</p>
      <button onClick={ handleClick }>See More</button>
    </div>
  )
}

export default ProjectCard