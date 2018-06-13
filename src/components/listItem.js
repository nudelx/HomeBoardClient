import React from "react"

const ListItem = ({ NAME, MAC, IP, TIME , OLD, NEW}) => (
  <li>
    <span className={`icon ${(OLD ? 'red':  (NEW ? 'yellow': 'green'))}`}> {OLD ? '✘': (NEW ? '✷': '✔︎')}</span>
    <span>{NAME}</span>
    <span>{IP}</span>
    <span>{MAC}</span>
    <span>{TIME}</span>
    <span>{OLD}</span>
  </li>
)
export default ListItem
