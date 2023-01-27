import React, { Fragment } from 'react'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import memories from './images/memories.png'

const App = () => {
  return (
    <Fragment>
      <img src={memories} alt="memories" height="60" />
      <Posts />
      <Form />
    </Fragment>
  )
}

export default App
