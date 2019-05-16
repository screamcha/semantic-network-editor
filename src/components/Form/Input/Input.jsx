import React from "react";

const Input = ({
  className = "",
  error = "",
  label,
  name,
  onChange,
  onError,
  onFocus,
  placeholder,
  type = "text",
  validators = [],
  value = "",
}) => {
  const [dirty, setDirty] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const handleBlur = e => {
    if (!showError && validators.length) {
      setShowError(true);

      validate(value);
    }
  };
  const handleChange = event => {
    const { value: inputValue } = event.currentTarget;

    if (!dirty) {
      setDirty(true);
    }

    if (showError) {
      validate(inputValue);
    }

    onChange && onChange(event);
  };
  const handleFocus = e => {
    if (!touched) {
      setTouched(true);
    }

    onFocus && onFocus(e.currentTarget.value);
  };

  const validate = value => {
    let error = "";

    for (const validator of validators) {
      error = validator(value);
      if (error) {
        break;
      }
    }

    onError({ name, value: error });
  };

  return (
    <div className={`input ${className}`}>
      {label && (
        <label className="input__label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="input__field"
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {showError && !!error && <div className="input__error">{error}</div>}
    </div>
  );
};

export default Input;
