import React, { Component } from 'react'

class ArrowTypeModal extends Component {
  state = {
    addNewType: true,
    type: 'add new'
  }

  onSelectChange = ({ target: select }) => {
    const showNewTypeInput = select.value === 'add new'
    this.setState({ type: select.value, addNewType: showNewTypeInput })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state.type)
  }

  render () {
    const { edgeStyles } = this.props
    const { addNewType } = this.state

    return (
      <div class='modal fade' id='arrow-type-modal' tabindex='-1'>
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='arrow-type-modal-label'>Выберите тип связи</h5>
              <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <div className='form-group'>
                <label htmlFor='arrow-type-select'>Тип:</label>
                <select name='arrow-type-select' id='arrow-type-select' className='form-control' onChange={this.onSelectChange}>
                  {edgeStyles.map(cnf => <option value={cnf.type}>{cnf.type}</option>)}
                  <option value='add new'>Добавить новый</option>
                </select>
              </div>
              {addNewType && (
                <div className='form-group'>
                  <input className='form-control' type='text' placeholder='Введите новый тип' />
                </div>
              )}
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>
              <button type='button' class='btn btn-primary' onClick={this.handleSubmit}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArrowTypeModal
