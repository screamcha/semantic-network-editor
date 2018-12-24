import React, { Component } from 'react'

class ArrowTypeModal extends Component {
  state = {
    addNewType: false,
    type: '',
    newTypeName: ''
  }

  handleSelectChange = ({ target: select }) => {
    const showNewTypeInput = select.value === 'add new'
    this.setState({ type: select.value, addNewType: showNewTypeInput })
  }

  handleInputChange = ({ target: input }) => {
    this.setState({ newTypeName: input.value })
  }

  resetModal = () => {
    this.setState({ addNewType: false, type: '', newTypeName: '' })
  }

  handleSubmit = () => {
    const { addNewType, type, newTypeName } = this.state
    const newType = addNewType ? newTypeName : type

    this.props.onSubmit(newType, addNewType)

    this.resetModal()
  }

  handleDecline = () => {
    this.props.onDecline()
    this.resetModal()
  }

  render () {
    const { edgeStyles } = this.props
    const { addNewType, type, newTypeName } = this.state
    const isSubmitDisabled = !type || (addNewType && !newTypeName)

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
                <select name='arrow-type-select' id='arrow-type-select' className='form-control' value={type} onChange={this.handleSelectChange}>
                  {edgeStyles.map(cnf => <option value={cnf.type}>{cnf.type}</option>)}
                  <option value='add new'>Добавить новый</option>
                </select>
              </div>
              {addNewType && (
                <div className='form-group'>
                  <input className='form-control' type='text' placeholder='Введите новый тип' value={newTypeName} onChange={this.handleInputChange} />
                </div>
              )}
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-secondary' data-dismiss='modal' onClick={this.handleDecline}>Отмена</button>
              <button type='button' class='btn btn-primary' disabled={isSubmitDisabled} onClick={this.handleSubmit}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArrowTypeModal
