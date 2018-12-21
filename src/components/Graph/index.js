import React from 'react'

import './styles.css'

const Graph = (props) => {
  const { getRootRef } = props

  return (
    <section className='graph-container'>
      <div id='cy' ref={getRootRef} />
    </section>
  )
}

export default Graph
