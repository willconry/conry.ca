import React from 'react'
import Post from '../../Post'
import { aboutMe, aboutProjects, aboutSite } from './Data'

function Home() {
    return (
        <>
        <div className='homepage'>
            <Post {...aboutMe} />
            <Post {...aboutSite} />            
            <Post {...aboutProjects} />
        </div>
        </>
    )
}

export default Home
