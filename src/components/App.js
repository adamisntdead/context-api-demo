import React, { Component } from 'react'
import { Consumer } from './Context'

class App extends Component {
  render() {
    return (
      <Consumer>
      {store => <h1 onClick={store.update}>Hi {store.name}!</h1>}
      </Consumer>
    )
  }
}

export default App
