import React from "react"
import List from "./list"
const Box = ({ data, onReload }) => {
  return (
    <div className="box table">
      <div className="box-header">
        {data ? (
          `home dhcp - ${Object.keys(data).length} devices`
        ) : (
          <div className="icon spinner" />
        )}
        <span className="reload-holder" onClick={onReload}>
          <div className="reload" />
        </span>
      </div>
      <List data={data} />
    </div>
  )
}

export default Box
