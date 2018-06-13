import React from 'react';
import List from './list'
const Box = ({data}) =>  {
  console.log('data', data)
  return (
  <div className="box table">
    <div className="box-header">home dhcp</div>
    <List data={data}/>
  </div>
)}

export default Box
