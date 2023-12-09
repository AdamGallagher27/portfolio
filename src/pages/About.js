import React, { useEffect, useState } from 'react'
import { getGitHubContributions } from '../api/projectsData'

const About = () => {

  const [githubCommits, setGithubCommits] = useState(null)
  const [thisWeeksCommits, setThisWeeksCommits] = useState({})


  useEffect(() => {
    getGitHubContributions(setGithubCommits)
  }, [])

  useEffect(() => {
    if(githubCommits !== null) {
      getThisWeeksCommits()
    }

  }, [githubCommits])


  const getThisWeeksCommits = () => {
    setThisWeeksCommits(githubCommits.weeks[githubCommits.weeks.length - 1].contributionDays)
  }
  

  // if(Object.keys(thisWeeksCommits).length !== 0) {
  //   setThisWeeksCommits(getThisWeeksCommits)
  // }

  // getThisWeeksCommits()

  if(githubCommits === null) return <>loading</>

  return (
    <div className="hero mt-10">
      <div className="hero-content text-center">
        <div className='flex flex-col max-w-lg'>
        <div className="">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Hello, I'm Adam Gallagher, a passionate software developer with a love for crafting clean and efficient code. I thrive on turning complex problems into simple, elegant solutions. Here's a glimpse into my professional journey. </p>
        </div>
        <div>
          Total Github Contributions This Year : {githubCommits.totalContributions}
        </div>
        <div>
          This Weeks Commits : {JSON.stringify(thisWeeksCommits)}
        </div>
        </div>
      </div>
    </div>
  )
}

export default About