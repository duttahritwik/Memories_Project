import React, { useEffect } from 'react'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import memories from './images/memories.png'
import './styles.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="pageStyle">
      <img src={memories} alt="memories" height="60" />
      <Posts />
      <Form />
    </div>
  )
}

export default App
