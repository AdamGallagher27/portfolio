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
    <div className='hero mt-10 mb-24'>
      <div className='flex flex-col gap-8'>
      <h1 className='text-5xl font-bold'>Projects</h1>
      {projectCardComponents}
      </div>
    </div>
  )
}

export default Index