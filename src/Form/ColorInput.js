import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  primaryColor: ['red', 'blue', 'yellow'],
  secondaryColor: ['grey', 'purple', 'green']
};

const capitalize = name => name.charAt(0).toUpperCase() + name.slice(1);

// ColorInput
const ColorInput = ({ label, name, color, onChange }) => {
  const options = colors[name].map(color => {
    const label = capitalize(color);
    return (
      <option
        key={color}
        value={color}
        data-test={`ColorInput:option:${color}`}
      >
        {label}
      </option>
    );
  });

  return (
    <div className="form-control">
      <label>{label}</label>
      <select
        name={name}
        value={color}
        onChange={onChange}
        data-test={`ColorInput:select:${name}`}
      >
        {options}
      </select>
    </div>
  );
};

ColorInput.propTypes = {
  /** The input label */
  label: PropTypes.string.isRequired,
  /** The input tag name attribute value */
  name: PropTypes.oneOf(['primaryColor', 'secondaryColor']).isRequired,
  /** The currently selected color value  */
  color: PropTypes.string.isRequired,
  /** The onChange event handler  */
  onChange: PropTypes.func.isRequired
};

export default ColorInput;
