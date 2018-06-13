import React from 'react'

 const Board = ({ children }) => (
  <div className='board'>
    {
      typeof children === 'function'
        ? children()
        : null
    }
  </div>
)


export default Board
