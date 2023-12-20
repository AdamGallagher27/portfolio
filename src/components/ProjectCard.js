import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {

  const navigate = useNavigate()

  const navigateToShow = () => {
    navigate(`/projects/${project.slug}`, { replace: true })
  }

  return (
    <button onClick={navigateToShow} className="card lg:card-side bg-base-100 shadow-xl">
      <figure style={{
        width: '400px',
        height: '300px',
      }}>
        <img src={project.images[0].path} className='w-full h-full object-cover' alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
      </div>
    </button>
  )
}

export default ProjectCard