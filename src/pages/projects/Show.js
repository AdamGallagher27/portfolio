import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getSingleProject } from '../../api/projectsData'


const Show = () => {

  const { slug } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)

  useEffect(() => {
    getSingleProject(slug, setProject)
  }, [])


  if(project === null) return <>Nothing to See Here</>

  const projectTagPills = project.tags.map((tag, index) => {
    return (
      <div key={index} className="badge badge-neutral py-3">{tag}</div>
    )
  })


  return (
    <div className="hero mt-24 px-24">
      <div className='hero-content'>
      <div className="flex-col">
        <img src={project.images[0].path} className="rounded-lg shadow-2xl mb-3" />
        <div className='flex gap-2 mr-auto'>
        {projectTagPills}
        </div>
        <div className='mb-24'>
          <h1 className="text-5xl font-bold mt-10">{project.title}</h1>
          <div className="badge badge-neutral py-3 mt-4">{project.category}</div>
          <p className="py-6">{project.description}</p>
          <div className='flex gap-4'>
          <button className="btn btn-primary"><a target="_blank" href={project.github}>Github</a></button>
          {!project.website ? '' :  <button formAction={project.website} className="btn btn-primary"><a target="_blank" href={project.website}>Website</a></button>}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Show