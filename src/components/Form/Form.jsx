import React from 'react';

const Form = ({
  name,
  onSubmit,
  children
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form name={name} onSubmit={handleSubmit} noValidate>
      {children}
    </form>
  );
}

export default Form;
