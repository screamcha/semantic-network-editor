import React from "react";

import useForm from "../../hooks/useForm";

const Form = ({ name, onSubmit, children }) => {
  const { values, handleChange, handleSubmit } = useForm(onSubmit);

  const childrenToRender = React.Children.map(children, child =>
    React.cloneElement(child, {
      value: values[child.props.name],
      onChange: handleChange
    })
  );

  return (
    <form name={name} onSubmit={handleSubmit} noValidate>
      {childrenToRender}
    </form>
  );
};

export default Form;
