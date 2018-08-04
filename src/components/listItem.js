import React from "react"
import know from "../dataProvider/knowledge.json"
import { getDeviceIcon } from "../dataProvider/dataIcons"

const ListItem = ({ NAME, MAC, IP, TIME, OLD, NEW }) => {
  const name = (know[MAC] && know[MAC].NAME) || NAME
  const deviceIcon = getDeviceIcon(name)
  return (
    <li>
      <span className={`icon ${OLD ? "red" : NEW ? "yellow" : "green"}`}>
        {" "}
        {OLD ? "✘" : NEW ? "✷" : "✔︎"}
      </span>
      <span className={`icon device ${deviceIcon}`}> </span>
      <span>{name}</span>
      <span>{IP}</span>
      <span>{MAC}</span>
      <span>{TIME}</span>
      <span>{OLD}</span>
    </li>
  )
}
export default ListItem
