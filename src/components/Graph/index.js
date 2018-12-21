import React from 'react'

import './styles.css'

const Graph = (props) => {
  const { onSave, getRootRef } = props

  return (
    <React.Fragment>
      <button type='button' onClick={onSave}>Save results</button>
      <div id='cy' ref={getRootRef} />
    </React.Fragment>
  )
}

export default Graph
