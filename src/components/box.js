import React, { Component } from 'react'
import List from './list'
import { serverFetch } from '../dataProvider/dataFetch'
import { diffData } from '../dataProvider/dataDiff'

class Box extends Component {
  state = {}

  getData = () => {
    const { type } = this.props
    serverFetch().then(incoming => {
      const localData = JSON.parse(localStorage.localDataDhcp || '{}')
      localStorage.setItem('localDataDhcp', JSON.stringify(incoming))
      this.setState({
        dhcp: diffData({ ...localData }, { ...incoming }),
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
    const { dhcp } = this.state
    return (
      <div className="box table">
        <div className="box-header">
          {dhcp ? (
            `home dhcp - ${Object.keys(dhcp).length} devices`
          ) : (
            <div className="icon spinner" />
          )}
          <span className="reload-holder" onClick={this.getData}>
            <div className="reload" />
          </span>
        </div>
        <List data={dhcp} />
      </div>
    )
  }
}

export default Box
