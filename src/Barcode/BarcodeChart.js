import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { barStyle } from '../utils/barStyle';

const Bar = ({ bar, selectedColor }) => {
  const style = { ...barStyle({ bar }), backgroundColor: selectedColor };
  return (
    <div style={style} data-test={`BarcodeChart:Bar:div:${selectedColor}`}>
      {bar}
    </div>
  );
};

// BarcodeChart
const BarcodeChart = ({
  bars,
  checksumDigit,
  primaryColor,
  secondaryColor
}) => {
  const hasPrimaryBars = bars.length > 0;
  const primary = hasPrimaryBars
    ? bars.map((bar, index) => (
        <Bar key={index} bar={bar} selectedColor={primaryColor} />
      ))
    : null;
  const secondary = hasPrimaryBars ? (
    <Bar bar={checksumDigit} selectedColor={secondaryColor} />
  ) : null;

  return (
    <Fragment>
      <h4 className="align-center">Generated Barcode</h4>
      <div className="flex-container">
        {primary}
        {secondary}
      </div>
    </Fragment>
  );
};

BarcodeChart.propTypes = {
  /** The list of bars */
  bars: PropTypes.array.isRequired,
  /** The generated checksum digit */
  checksumDigit: PropTypes.number.isRequired,
  /** The background color for the primary bars (input digits) */
  primaryColor: PropTypes.string.isRequired,
  /** The background color for the secondary bar (checksum digit) */
  secondaryColor: PropTypes.string.isRequired
};

export default BarcodeChart;
