import React from "react"

const Board = ({ children }) => (
  <div className="board">
    {typeof children === "function" ? children() : children}
  </div>
)

export default Board
