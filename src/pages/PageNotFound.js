import { useLocation } from "react-router-dom"

const PageNotFound = () => {

	const location = useLocation()

  return (
    <div>
        <h2>Sorry 404 {location.pathname} not found</h2>
    </div>
  )
}

export default PageNotFound 