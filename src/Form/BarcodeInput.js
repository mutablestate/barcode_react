import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// BarcodeInput
const BarcodeInput = ({ name, value, maxLength, onChange, status }) => {
  return (
    <Fragment>
      <div className="form-control">
        <label>Barcode Digits</label>
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          data-test="BarcodeInput:input"
        />
        <span className="barcode-status" data-test="BarcodeInput:status">
          {status}
        </span>
      </div>
    </Fragment>
  );
};

BarcodeInput.propTypes = {
  /** The input tag name attribute value */
  name: PropTypes.string.isRequired,
  /** The input tag maxLength attribute value */
  maxLength: PropTypes.number.isRequired,
  /** The onChange event handler */
  onChange: PropTypes.func.isRequired,
  /** The input tag value attribute */
  value: PropTypes.string,
  /** Barcode status message to inform users of the current status */
  status: PropTypes.string.isRequired
};

export default BarcodeInput;
