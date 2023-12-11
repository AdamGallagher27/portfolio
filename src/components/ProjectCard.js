import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {

  const navigate = useNavigate()

  const navigateToShow = () => {
    navigate(`/projects/${project.slug}`, { replace: true })
  }

  return (
    <button onClick={navigateToShow} className="card lg:card-side bg-base-100 shadow-xl">
      <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
      </div>
    </button>
  )
}

export default ProjectCard