import React from 'react'

import './styles.css'

const Graph = (props) => {
  const { onSave } = props
  return (
    <React.Fragment>
      <button type='button' onClick={onSave}>Save results</button>
      <div id='cy' />
    </React.Fragment>
  )
}

export default Graph
