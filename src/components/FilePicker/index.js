import React, { PureComponent } from 'react'
import { readJSON } from '../../utils/read'

import './styles.css'

export class FilePicker extends PureComponent {
  selectFile = ({ target: input }) => {
    const { onReadEnd } = this.props
    return readJSON(input, onReadEnd)
  }

  render () {
    const { className } = this.props

    return (
      <div className={`file-picker-container ${className}`}>
        <label className='label' htmlFor='file-picker'>Загрузить JSON</label>
        <input type='file' id='file-picker' className='file-picker' onChange={this.selectFile} />
      </div>
    )
  }
}

export default FilePicker
