import React, { Component } from "react"
import "./App.css"
import { serverFetch } from "./dataProvider/dataFetch"
import Header from "./components/header"
import Board from "./components/board"
import Box from "./components/box"
const diffData = (oldData = {}, newData = {}) => {
  const res = Object.keys(oldData).reduce((all, item) => {
    const oldContent = oldData[item] || {}
    const newContent = newData[item] || {}
    if (
      oldContent.NAME === newContent.NAME &&
      oldContent.MAC === newContent.MAC &&
      oldContent.IP === newContent.IP
    ) {
      all[item] = newContent
      delete newData[item]
    } else {
      // all[item] = { ...newContent,  NEW:true }
      all[item + "_old"] = { ...oldContent, OLD: true }
    }
    return all
  }, {})
  const newRes = Object.keys(newData).reduce((allnew, item) => {
    allnew[item + "_new"] = { ...newData[item], NEW: true }
    return allnew
  }, {})
  return { ...res, ...newRes }
}
console.log(process.env)
class App extends Component {
  state = {}
  componentDidMount() {
    serverFetch().then(data => {
      const localData = JSON.parse(localStorage.localDataDhcp || "{}")
      localStorage.setItem("localDataDhcp", JSON.stringify(data))
      this.setState({ data: diffData(localData, data) })
    })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Board>
          {() => (
            <React.Fragment>
              <Box data={this.state.data} />
            </React.Fragment>
          )}
        </Board>
      </div>
    )
  }
}

export default App
