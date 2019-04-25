import React, { useState, Fragment } from 'react';

import { barStyle } from './utils/barStyle';
import {
  barcodeValidationRules,
  barcodeInputStatus,
  cleanBarcodeInput
} from './utils/validation';
import { generateChecksumDigit } from './utils/checksum';
import BarcodeChart from './Barcode/BarcodeChart';
import ColorInput from './Form/ColorInput';
import BarcodeInput from './Form/BarcodeInput';

const App = () => {
  const [formValues, setFormValues] = useState({
    barcode: '',
    checksumDigit: 0,
    primaryColor: 'red',
    secondaryColor: 'green',
    barcodeStatus: barcodeInputStatus({ barcode: '' })
  });

  const updateBarcodeFormValues = ({ value, maxLength }) => {
    const barcodeValue = cleanBarcodeInput({ barcode: value, maxLength });
    const checksumDigit = generateChecksumDigit({ barcode: barcodeValue });
    const barcodeStatus = barcodeInputStatus({
      barcode: barcodeValue,
      maxLength,
      checksumDigit
    });
    setFormValues({
      ...formValues,
      barcode: barcodeValue,
      barcodeStatus,
      checksumDigit
    });
  };

  const handleOnChange = event => {
    event.preventDefault();
    const { name, value, maxLength } = event.target;
    const isBarcode = name === 'barcode';
    if (isBarcode) {
      updateBarcodeFormValues({ value, maxLength });
    } else {
      setFormValues({
        ...formValues,
        [name]: value
      });
    }
  };

  const {
    barcode,
    primaryColor,
    secondaryColor,
    barcodeStatus,
    checksumDigit
  } = formValues;
  return (
    <Fragment>
      <section className="section-secondary">
        <div className="row">
          <div className="col col-md-8 col-xlg-8 col-md-offset-2">
            <form>
              <BarcodeInput
                name="barcode"
                value={barcode}
                onChange={handleOnChange}
                maxLength={barcodeValidationRules.MAX_LENGTH}
                status={barcodeStatus}
              />
              <div className="form-control-group">
                <ColorInput
                  label="Primary Color (barcode)"
                  name="primaryColor"
                  color={primaryColor}
                  onChange={handleOnChange}
                />
                <ColorInput
                  label="Secondary Color (checksum)"
                  name="secondaryColor"
                  color={secondaryColor}
                  onChange={handleOnChange}
                />
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-8 col-xlg-8 col-md-offset-2">
            <BarcodeChart
              bars={barcode.split('')}
              checksumDigit={checksumDigit}
              primaryColor={primaryColor}
              secondaryColor={secondaryColor}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default App;
