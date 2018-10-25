import React from "react";
import "./index.styl";
const InputField = ({
  value,
  field,
  type,
  label,
  placeholder,
  setState,
  rightIcon,
  datalist,
  datalistName,
  autoComplete
}) => (
  <div class="input-field-container">
    <label>{label}</label>
    <input
      class="input-field"
      value={value}
      onChange={event => setState(byPropKey(field, event.target.value))}
      type={type}
      placeholder={placeholder}
      list={datalistName}
      autoComplete={autoComplete}
    />
    {datalist}
    {rightIcon}
  </div>
);

export const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

export default InputField;
