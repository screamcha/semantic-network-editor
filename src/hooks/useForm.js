import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleError = ({ name, value }) => {
    setErrors({ ...errors, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    const errorExists = Object.keys(errors).find(
      errorKey => !!errors[errorKey]
    );

    if (errorExists) {
      return null;
    } else {
      callback(values);
    }
  };

  return {
    errors,
    values,
    handleChange,
    handleError,
    handleSubmit
  };
};

export default useForm;
