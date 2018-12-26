import React from 'react'

import './styles.css'

const ArrowLegend = (props) => {
  const { edgeStyles } = props

  return (
    <div className='arrow-legend row'>
      {edgeStyles.map(style => (
        <div className='d-flex col-6'>
          <div className='color' style={{ backgroundColor: style.color }} />
          <div className='type'>{style.type}</div>
        </div>
      ))}
    </div>
  )
}

export default ArrowLegend
