import React from "react";

import useForm from "hooks/useForm";

const CHILDREN_FORM_TYPES = ["Input"];

const Form = ({ name, onSubmit, children }) => {
  const { errors, values, handleChange, handleError, handleSubmit } = useForm(
    onSubmit
  );

  const childrenToRender = React.Children.map(children, child => {
    const validators = child.props.validators
      ? child.props.validators.map(validator => value =>
          validator(value, values)
        )
      : null;

    if (CHILDREN_FORM_TYPES.includes(child.type.name)) {
      return React.cloneElement(child, {
        error: errors[child.props.name],
        value: values[child.props.name],
        validators,
        onChange: handleChange,
        onError: handleError,
      });
    } else {
      return child;
    }
  });

  return (
    <form name={name} onSubmit={handleSubmit} noValidate>
      {childrenToRender}
    </form>
  );
};

export default Form;
