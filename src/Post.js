import React from 'react'
import './Post.css'
import Avatar from '@mui/material/Avatar';

function Post({username,imageUrl}) {
    return (
        <div className="post">
            <div className="post_header">
            <Avatar
                className="post_avatar"
                alt='Anjana'
                src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
            

            </div>
           
            <img className="post_image" src={imageUrl} alt=""></img>
        </div>
    )
}

export default Post
