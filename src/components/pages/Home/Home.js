import React from 'react'
import Post from '../../Post'
import { aboutMe, aboutMe2, aboutMe3, aboutSite, aboutSite3 } from './Data'

function Home() {
    return (
        <>
            <Post {...aboutMe} />
            <Post {...aboutSite} />            <Post {...aboutMe} />
            <Post {...aboutSite} />
            <Post {...aboutMe2} />
            <Post {...aboutSite3} />
            <Post {...aboutMe3} />
        </>
    )
}

export default Home
