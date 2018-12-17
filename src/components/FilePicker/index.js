import React, { PureComponent } from 'react'
import { readJSON } from '../../utils/read'

export class FilePicker extends PureComponent {
  selectFile = ({ target: input }) => {
    const { onReadEnd } = this.props
    return readJSON(input, onReadEnd)
  }

  render () {
    return (
      <div>
        <label htmlFor='file-picker'>Select JSON</label>
        <input type='file' id='file-picker' onChange={this.selectFile} />
      </div>
    )
  }
}

export default FilePicker
