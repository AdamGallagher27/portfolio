import React, { useEffect, useState } from 'react'
import { getGitHubContributions } from '../api/projectsData'
import CommitBlock from '../components/CommitBlock'

const About = () => {

  const [githubCommits, setGithubCommits] = useState(null)
  const [lastWeeksCommits,setLastWeeksCommits] = useState([])


  useEffect(() => {
    getGitHubContributions(setGithubCommits)
  }, [])

  useEffect(() => {
    if (githubCommits !== null) {
      getLastWeeksCommits()
    }

  }, [githubCommits])


  const getLastWeeksCommits = () => {
  setLastWeeksCommits(githubCommits.weeks[githubCommits.weeks.length - 2].contributionDays)
  }

  if (githubCommits === null) return 'loading'

  const commitBlocks = lastWeeksCommits.map((commits, index) => {
    return <CommitBlock key={index} numberOfCommits={commits.contributionCount} />
  })


  return (
    <div className="hero mt-10">
      <div className="hero-content text-center">
        <div className='flex flex-col max-w-lg'>
          <div className="">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Hello, I'm Adam Gallagher, a passionate software developer with a love for crafting clean and efficient code. I thrive on turning complex problems into simple, elegant solutions. Here's a glimpse into my professional journey. </p>
          </div>
          <div>
            <h1 className="text-4xl font-bold mt-9">Contributions</h1>
          </div>
          <div className='flex gap-4 mt-8'>
            {commitBlocks}
          </div>
          <div className='mt-4'>
            <p>Total Github Contributions This Year : <span className='text-green-500 font-medium'>{githubCommits.totalContributions}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About