import React from 'react'
import './Post.css'

function Post({
    html
}) {

    // const p = paragraph.map(data => <p>{data}</p>)
    return (
        <>
            <div className="post">
                <div className="container">
                    {html}
                </div>
            </div>
        </>
    )
}

export default Post
