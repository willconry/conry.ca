import React from 'react'
import Post from '../../Post'
import { aboutHTML, aboutMe, aboutSite } from './Data'

function Home() {
    return (
        <>
            <Post {...aboutMe} />
            <Post {...aboutSite} />
        </>
    )
}

export default Home
