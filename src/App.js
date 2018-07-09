import React, { Component } from 'react'
import Form from './components/Form'
import MessageBoard from './components/MessageBoard'

class App extends Component {
  render() {
    return (
      <div className="bodyWrapper2">
        <div className="bodyWrapper">
          <MessageBoard />
          <Form />
        </div>{' '}
      </div>
    )
  }
}

export default App
