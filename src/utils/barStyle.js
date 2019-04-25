// Bar style utility functions

import React from 'react';
import PropTypes from 'prop-types';

export const barWidth = {
  thinnest: '10px',
  thicker: '20px',
  thickest: '30px'
};

export const thinnestBars = [0, 1, 2, 3];
export const thickerBars = [4, 5, 6, 7];
export const thickestBars = [8, 9];

// barPixelWidth
const barPixelWidth = bar => {
  if (thinnestBars.includes(bar)) {
    return barWidth.thinnest;
  } else if (thickerBars.includes(bar)) {
    return barWidth.thicker;
  } else {
    return barWidth.thickest;
  }
};

barPixelWidth.propTypes = {
  bar: PropTypes.number.isRequired
};

// barPercentHeight
const barPercentHeight = bar => {
  return `${bar * 10 + 10}%`;
};

barPercentHeight.propTypes = {
  bar: PropTypes.number.isRequired
};

// barStyle returns a styles object
const barStyle = ({ bar }) => {
  const barInt = parseInt(bar, 10);
  return {
    flex: `0 0 ${barPixelWidth(barInt)}`,
    height: barPercentHeight(barInt)
  };
};

barStyle.propTypes = {
  bar: PropTypes.number.isRequired
};

export { barStyle };
