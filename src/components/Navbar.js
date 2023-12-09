import { useNavigate, useLocation } from "react-router-dom"

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const navigateHome = () => {
    navigate('/')
  }

  const navigateProjects = () => {
    navigate('/projects')
  }

  const navigateContact = () => {
    navigate('/contact')
  }

  const markSelectedTab = (tabName) => {
    return location.pathname === tabName ? 'text-primary' : 'cursor-pointer'
  }

  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img src="https://avatars.githubusercontent.com/u/99290148?v=4" className="h-auto w-40 rounded-full shadow-2xl" />
        <div>
          <h1 className="text-4xl font-bold">Adam Gallagher</h1>
          <ul className='flex gap-4 mt-10'>
            <li onClick={navigateHome} className={`font-medium text-lg ${markSelectedTab('/')}`}>About</li>
            <li onClick={navigateProjects} className={`font-medium text-lg ${markSelectedTab('/projects')}`}>Projects</li>
            <li onClick={navigateContact} className={`font-medium text-lg ${markSelectedTab('/contact')}`}>Contact</li>
          </ul>
        </div> 
      </div>
    </div>
  )
}

export default Navbar