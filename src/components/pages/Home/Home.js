import React from 'react'
import Post from '../../Post'
import { aboutMe, aboutProjects, aboutSite } from './Data'

function Home() {
    return (
        <>
            <Post {...aboutMe} />
            <Post {...aboutSite} />            
            <Post {...aboutProjects} />
        </>
    )
}

export default Home
