import React from 'react'
// import './Post.scss'

function Post({
    html
}) {

    // const p = paragraph.map(data => <p>{data}</p>)
    return (
        <>
            <div className="post">
                <div className="post-container">
                    {html}
                </div>
            </div>
        </>
    )
}

export default Post
