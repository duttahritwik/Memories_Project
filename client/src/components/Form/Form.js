import React, { useState } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'
import { createPost } from '../../actions/posts'
import './formStyles.css'

const Form = () => {
  const formTextPlaceholders = [
    { type: 'creator', placeholder: 'Post Creator' },
    { type: 'title', placeholder: 'Post Title' },
    { type: 'body', placeholder: 'Post Body' },
    { type: 'tags', placeholder: 'Post Tags' },
  ]

  const dispatch = useDispatch()

  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    body: '',
    tags: '',
    selectedFile: '',
  })

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  }

  return (
    <div className="form-container">
      {[...Array(4)].map((_, index) => (
        <input
          type="text"
          placeholder={formTextPlaceholders[index].type}
          className="form-text-container"
          value={postData[formTextPlaceholders[index].type]}
          onChange={(e) => {
            setPostData({
              ...postData,
              [formTextPlaceholders[index].type]: e.target.value,
            })
          }}
        />
      ))}
      <div className="file-upload-container">
        <FileBase
          type="file"
          multiple={false}
          onDone={(base64) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </div>
      <button className="submit-post" onClick={handleFormSubmit}>
        Submit
      </button>
      <button className="clear-form">Clear</button>
    </div>
  )
}

export default Form
