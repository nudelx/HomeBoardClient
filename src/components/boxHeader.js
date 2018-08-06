import React from "react"
import Reload from "./reload"
import Spinner from "./spinner"

const BoxHeader = ({ data, title, onClick }) => (
  <div className="box-header">
    {data ? `${title} - ${Object.keys(data).length} devices` : <Spinner />}
    <Reload onClick={onClick} />
  </div>
)

export default BoxHeader
