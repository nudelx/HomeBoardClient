import React from "react"
import { BOX_NAMES } from "../constants/constNames"
import ListItem from "./listItem"

const headers = {
  [BOX_NAMES.DHCP]: ["#", "name", "IP", "MAC", "STATUS", "TIME"],
  [BOX_NAMES.TRAFFIC]: [
    "#",
    "name",
    "IP",
    "MAC",
    "STATUS",
    "T_BT",
    "T_PKT",
    "C_PKT"
  ]
}

const ListHeader = ({ data, headers }) => (
  <li className={"list-header"}>
    {headers.map(h => <span key={h}>{h}</span>)}
  </li>
)

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
