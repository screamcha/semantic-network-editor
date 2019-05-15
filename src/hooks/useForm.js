import { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    callback(values);
  };

  return {
    values,
    handleChange,
    handleSubmit
  };
};

export default useForm;
