import React, { Component } from 'react'
import './App.css'
import Header from './components/header'
import Board from './components/board'
import Box from './components/box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board>
          {() => (
            <React.Fragment>
              <Box type={'DHCP'} />
              {/* <Box data={this.state.traffic} /> */}
              {/* <Box data={this.state.hosts} /> */}
            </React.Fragment>
          )}
        </Board>
      </div>
    )
  }
}

export default App
