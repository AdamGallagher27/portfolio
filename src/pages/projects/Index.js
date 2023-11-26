import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import projectsData from '../../assets/projects.json'

const Index = () => {

  const [projects, setProjects] = useState(projectsData)

  const projectCardComponents = projects.map((project, index) => {
    return <ProjectCard key={index} project={project} />
  })

  return (
    <div>{projectCardComponents}</div>
  )
}

export default Index