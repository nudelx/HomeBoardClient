import React from "react"
import know from "../dataProvider/knowledge.json"
import { getDeviceIcon } from "../dataProvider/dataIcons"
import Badge from "./badge"

const ListItem = ({
  NAME,
  MAC,
  IP,
  TIME,
  OLD,
  NEW,
  TOT_BYTE,
  TOT_PKTS,
  CUR_PKTS
}) => {
  const name = (know[MAC] && know[MAC].NAME) || NAME || "?"
  const deviceIcon = getDeviceIcon(name)
  return (
    <li>
      <span className={`icon device ${deviceIcon}`}> </span>
      <span>{name}</span>
      <span>{IP}</span>
      <span>{MAC}</span>
      <span>
        <Badge txt={OLD ? "removed" : NEW ? "new" : "online"} />
      </span>
      <span>{TIME || TOT_BYTE}</span>
      <span>{OLD || TOT_PKTS}</span>
      <span>{CUR_PKTS}</span>
    </li>
  )
}
export default ListItem
