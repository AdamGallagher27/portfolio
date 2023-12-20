import React, { useEffect, useState } from 'react'
import { getGitHubContributions } from '../api/projectsData'
import CommitBlock from '../components/CommitBlock'

const About = () => {

  const [githubCommits, setGithubCommits] = useState(null)
  const [lastWeeksCommits, setLastWeeksCommits] = useState([])


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
    <>
      <div className="hero mt-24">
        <div className="hero-content text-center">
          <div className='flex flex-col max-w-lg'>
            <div>
              <h1 className="text-5xl mt-5 font-bold">Hello There</h1>
              <p className="py-6">Hello, I'm Adam Gallagher, a passionate software developer with a love for crafting clean and efficient code. I thrive on turning complex problems into simple, elegant solutions. Here's a glimpse into my professional journey. </p>
            </div>
            <div>
              <h1 className="text-5xl font-bold mt-24">Contributions</h1>
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
      <div className="hero py-24 mt-24 mt-10 bg-base-200">
        <div className="hero-content flex-col max-w-lg lg:flex-row">
          <div className="hero-content text-center">
            <div className='flex flex-col justify-center items-center '>
              <h1 className="text-5xl font-bold">About Me</h1>
              <p className="py-6">I am a Creative Computing student at IADT deeply passionate about crafting seamless digital experiences. My focus lies in web development, where I've gained hands-on experience with TypeScript, JavaScript, PHP, Laravel, and React. As I navigate my academic journey, I'm driven by a fervor for problem-solving and innovation, evident in the diverse projects I've undertaken—from dynamic web applications to robust backend systems. My commitment to continuous learning ensures that I stay at the forefront of industry trends, eager to contribute my skills to meaningful projects.
              </p>
              <p>In the dynamic world of software development, I value collaboration and effective communication. Thriving in team environments, I recognize the power of diverse perspectives coming together to create solutions that transcend expectations. I invite you to explore my portfolio and discover the projects that showcase my dedication to excellence. Excited about the endless possibilities that lie ahead, I am ready to take on new challenges, contribute to impactful projects, and make a positive mark in the ever-evolving realm of technology.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About