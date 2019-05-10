import React from "react";

const Input = ({
  className = "",
  value = "",
  placeholder,
  name,
  onChange,
  onFocus,
  type = "text",
  label,
  validators = []
}) => {
  const [error, setError] = React.useState("");
  const [dirty, setDirty] = React.useState(false);
  const [touched, setTouched] = React.useState(false);
  const [showError, setShowError] = React.useState(false);

  const handleBlur = e => {
    if (!showError && validators.length) {
      setShowError(true);
    }
  };
  const handleChange = event => {
    const { value: inputValue } = event.currentTarget;
    if (!dirty) {
      setDirty(true);
    }

    validate(inputValue);

    onChange && onChange(event);
  };
  const handleFocus = e => {
    if (!touched) {
      setTouched(true);
    }

    onFocus && onFocus(e.currentTarget.value);
  };

  const validate = value => {
    setError("");

    for (let validator of validators) {
      const _error = validator(error);
      if (_error) {
        setError(_error);
        break;
      }
    }
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
      {showError && error && <div className="input__error">{error}</div>}
    </div>
  );
};

export default Input;
