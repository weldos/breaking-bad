import React from 'react'

import spinner from '../../img/spinner.gif'

const Spinner = () => {
  return (
    <div>
      <img src={spinner} style={myStyle} alt="Loading"/>
    </div>
  )
}

export default Spinner


const myStyle = {
  width: '200px',
  margin: 'auto',
  display: 'block'
}
