import React from 'react'
import Post from '../components/Post'
import Spacer from '../components/Spacer'
import { aboutMe, aboutProjects, aboutSite } from './Data'

function Home() {
    return (
        <>
                                        <Spacer {...{height: 64}} />
            <Post {...aboutMe} />       <Spacer {...{height: 64}} />
            <Post {...aboutSite} />     <Spacer {...{height: 64}} />            
            <Post {...aboutProjects} /> <Spacer {...{height: 64}} />
            
        </>
    )
}

export default Home
