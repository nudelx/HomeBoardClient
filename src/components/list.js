import React from "react"
import ListItem from "./listItem"
import { headers } from "../dataProvider/dataHeaders"
import ListHeader from "./listHeaders"

const List = ({ data, type }) => {
  return (
    <ul className="list">
      <ListHeader data={data} headers={headers[type]} />
      {data &&
        Object.keys(data).map(item => <ListItem key={item} {...data[item]} />)}
    </ul>
  )
}

export default List
