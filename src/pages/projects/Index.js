import { useEffect, useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import {getAllProjects} from '../../api/projectsData'


const Index = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getAllProjects(setProjects)
  }, [])


  if(projects.length === 0) {
    return(<>Loading</>)
  }

  const projectCardComponents = projects.map((project, index) => {
    return <ProjectCard key={index} project={project} />
  })

  return (
    <div>

      projects
    </div>
  )
}

export default Index