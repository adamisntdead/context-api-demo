import React, { Component, createContext } from 'react'

const Context = createContext()
// { Provider, Consumer } = Context

export class Provider extends Component {
  state = {
    name: 'Dublin React Usergroup Meetup Members',
    update: () => this.setState({ name: 'ReactJS Dublin'})
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer
