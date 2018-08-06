import React, { Component } from "react"
import "./App.css"
import Header from "./components/header"
import Board from "./components/board"
import Box from "./components/box"
import { BOX_NAMES } from "./constants/constNames"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Board>
          {() => (
            <React.Fragment>
              <Box type={BOX_NAMES.DHCP} diff title={"dhcp"} />
              <Box type={BOX_NAMES.TRAFFIC} diff title={"traffic"} />
            </React.Fragment>
          )}
        </Board>
      </div>
    )
  }
}

export default App
