import React from 'react';

const Input = ({
  className = '',
  value,
  placeholder,
  name,
  onChange,
  type = 'text',
  label
}) => {

  const handleChange = (e) => {
    onChange(e.currentTarget.value);
  }

  return (
    <div className={`input ${className}`}>
      {label && (
        <label className='input__label' htmlFor={name}>{label}</label>
      )}
      <input 
        className='input__field' 
        value={value} 
        placeholder={placeholder} 
        name={name} 
        type={type}
        onChange={handleChange} 
      />
    </div>
  );
}

export default Input;
