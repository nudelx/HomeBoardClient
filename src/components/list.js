import React from 'react'
import ListItem from './listItem'
import { headers } from '../dataProvider/dataHeaders'
import ListHeader from './listHeaders'

const List = ({ data, type }) => {
  const SHOW_STATUS = type === 'DHCP'
  return (
    <ul className="list">
      <ListHeader data={data} headers={headers[type]} />
      {data &&
        Object.keys(data).map(item => (
          <ListItem key={item} {...data[item]} SHOW_STATUS={SHOW_STATUS} />
        ))}
    </ul>
  )
}

export default List
