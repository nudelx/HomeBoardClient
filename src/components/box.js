import React, { Component } from 'react'
import List from './list'
import { serverFetch } from '../dataProvider/dataFetch'
import { diffData } from '../dataProvider/dataDiff'
import { BOX_NAMES, BOX_MAP } from '../constants/constNames'

class Box extends Component {
  state = {}

  getData = () => {
    const { type } = this.props
    serverFetch({ API_PATH: BOX_MAP[type] }).then(incoming => {
      const localData = JSON.parse(localStorage[`localData_${type}`] || '{}')
      localStorage.setItem(`localData_${type}`, JSON.stringify(incoming))
      this.setState({
        data: diffData({ ...localData }, { ...incoming })
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
    const { data } = this.state
    return (
      <div className="box table">
        <div className="box-header">
          {data ? (
            `home dhcp - ${Object.keys(data).length} devices`
          ) : (
            <div className="icon spinner" />
          )}
          <span className="reload-holder" onClick={this.getData}>
            <div className="reload" />
          </span>
        </div>
        <List data={data} />
      </div>
    )
  }
}

export default Box
