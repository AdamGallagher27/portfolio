import React from 'react'

const CommitBlock = ({numberOfCommits}) => {

    const applyCommitColour = () => {
        if(numberOfCommits === 0) {
            return 'bg-base-300'
        }
        else if(numberOfCommits > 0 && numberOfCommits < 8) {
            return 'bg-green-300'
        }
        else if(numberOfCommits > 7) {
            return ' bg-green-500'
        }
    }

    return (
        <div className="flex w-full">
            <div className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 grid h-20 flex-grow card rounded-box place-items-center ${applyCommitColour()}`}>{numberOfCommits}</div>
        </div>
    )
}

export default CommitBlock