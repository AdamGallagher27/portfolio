import axios from 'axios'

const PROJECTS_API = 'https://portfolio-170ab-default-rtdb.europe-west1.firebasedatabase.app/.json'


// https://github.com/yuichkun/github-contribution-graph-example
const GITHUB_API = 'https://api.github.com/graphql'
const TOKEN = process.env.REACT_APP_TOKEN
const query =  `
query {
  user(login : "AdamGallagher27"){
		contributionsCollection {
			contributionCalendar {
        totalContributions
        weeks {
					contributionDays {
						contributionCount
            date
          }
        }
      }
  }
}
}
`

const getGitHubContributions = ( contributionSetter ) => {
  axios.post(GITHUB_API, {
    query : query
  }, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    }
  } )
  .then(response => {
    contributionSetter(response.data.data.user.contributionsCollection.contributionCalendar) 
  })
  .catch(error => {
    console.error(error)
  })
}


const returnProjectWithoutIdProperty = (response) => {
  return Object.values(response)[0]
}

const getAllProjects = (projectsSetter) => {
  axios.get(PROJECTS_API)
    .then((response) => {
      projectsSetter(response.data)
    })
    .catch(error => {
      console.error(error)
    })
}

const getSingleProject = (slug, projectSetter) => {
  axios.get(PROJECTS_API + `?orderBy="slug"&equalTo="${slug}"`)
    .then((response) => {
      projectSetter(returnProjectWithoutIdProperty(response.data))
    })
    .catch(error => {
      console.error(error)
    })
}



export { getAllProjects, getGitHubContributions, getSingleProject }