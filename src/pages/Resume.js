import React from 'react'
import DisplayPage from '../components/DisplayPage'
import Post from '../components/Post'
import Spacer from '../components/Spacer'
import { aboutResume, resumeURL } from './Data'

function Resume() {

    return (
        <>
            <Spacer {...{height: 64}} />
            <Post {...aboutResume} />
            <DisplayPage {...resumeURL} />
        </>
    )
}

export default Resume

