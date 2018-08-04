import React from "react"
import ListItem from "./listItem"

const List = ({ data }) => {
  return (
    <ul className="list">
      {data &&
        Object.keys(data).map(item => <ListItem key={item} {...data[item]} />)}
    </ul>
  )
}

export default List
