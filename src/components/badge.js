import React from 'react'
const Badge = ({ txt }) => (
  <div
    className={`badge ${
      txt.toLowerCase() === 'new'
        ? 'status-new'
        : txt.toLowerCase() === 'online'
          ? 'status-online'
          : 'status-removed'
    } `}>
    <div className={'txt'}>{txt}</div>
  </div>
)

Badge.defaultProps = {
  txt: 'online'
}
export default Badge
