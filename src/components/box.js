import React from "react"
import List from "./list"
const Box = ({ data }) => {
  return (
    <div className="box table">
      <div className="box-header">
        {data ? (
          `home dhcp - ${Object.keys(data).length} devices`
        ) : (
          <div className="icon spinner" />
        )}
      </div>
      <List data={data} />
    </div>
  )
}

export default Box
