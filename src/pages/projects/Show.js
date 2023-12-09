import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import projectsData from '../../assets/projects.json'


const Show = () => {

  const {slug} = useParams()

  // const [project, setProject] = useState(projectsData.find(project => project.slug === slug))

  return (
    <div>
      {/* {project.title} */}
    </div>
  )
}

export default Show