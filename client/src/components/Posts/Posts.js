import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import './postsStyles.css'

const Posts = () => {
  const posts = useSelector((state) => {
    console.log(state)
    return state.posts
  })
  console.log('POSTS', posts)

  return (
    <div className="postsContainer">
      <h1>Posts</h1>
      <div className="postsBodyContainer">
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Posts
