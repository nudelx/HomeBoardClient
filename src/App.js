import React, { Component } from "react"
import "./App.css"
import Header from "./components/header"
import Board from "./components/board"
import Box from "./components/box"
import { diffData } from "./dataProvider/dataDiff"
import { serverFetch } from "./dataProvider/dataFetch"

class App extends Component {
  state = {}

  getData = () => {
    serverFetch().then(incoming => {
      const localData = JSON.parse(localStorage.localDataDhcp || "{}")
      localStorage.setItem("localDataDhcp", JSON.stringify(incoming))
      this.setState({
        dhcp: diffData(localData, incoming),
        traffic: {},
        hosts: {}
      })
    })
  }

  componentDidMount() {
    this.getData()
    this.timer = setInterval(this.getData, 30000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Board>
          {() => (
            <React.Fragment>
              <Box data={this.state.dhcp} onReload={this.getData} />
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
