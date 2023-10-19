import { useNavigate } from "react-router-dom"

const NavigateExample = () => {

	let navigate = useNavigate()

	const handleClick = () => {
		navigate('/about')
	}


	return (
		<>
			<h1>this is the NavigateExample</h1>
			<button onClick={handleClick}>click to navigate</button>
		</>
	)
}

export default NavigateExample