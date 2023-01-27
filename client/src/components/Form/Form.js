import React, { useState } from 'react'
import './formStyles.css'

const Form = () => {
  const formTextPlaceholders = [
    { type: 'creator', placeholder: 'Post Creator' },
    { type: 'title', placeholder: 'Post Title' },
    { type: 'body', placeholder: 'Post Body' },
    { type: 'tags', placeholder: 'Post Tags' },
  ]

  const [formData, setFormData] = useState({
    creator: '',
    title: '',
    body: '',
    tags: '',
  })

  console.log(formData)

  const handleFormSubmit = () => {
    console.log('onformSubmit')
  }

  return (
    <div className="formContainer">
      {[...Array(4)].map((_, index) => (
        <input
          type="text"
          placeholder={formTextPlaceholders[index].type}
          className="formTextContainer"
          value={formData[formTextPlaceholders[index].type]}
          onChange={(e) => {
            setFormData({
              ...formData,
              [formTextPlaceholders[index].type]: e.target.value,
            })
          }}
        />
      ))}
      <input type="submit" value="Submit" onClick={handleFormSubmit} />
    </div>
  )
}

export default Form
