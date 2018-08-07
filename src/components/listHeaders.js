import React from "react"

const ListHeader = ({ data, headers }) => (
  <li className={"list-header"}>
    {headers.map(h => <span key={h}>{h}</span>)}
  </li>
)

export default ListHeader
