// Checksum utility functions

import PropTypes from 'prop-types';

const filterOdds = digits => digits.filter((d, index) => index % 2 === 0);
const filterEvens = digits => digits.filter((d, index) => index % 2 !== 0);
const sumDigits = digits =>
  digits.map(d => parseInt(d, 10)).reduce((a, b) => a + b, 0);

export const generateChecksumDigit = ({ barcode }) => {
  const digits = barcode.split('');
  const oddsTotal = sumDigits(filterOdds(digits)) * 3;
  const evensTotal = sumDigits(filterEvens(digits));
  const remainder = (oddsTotal + evensTotal) % 10;
  const finalResult = remainder === 0 ? 0 : 10 - remainder;

  return finalResult;
};

generateChecksumDigit.propTypes = {
  barcode: PropTypes.string.isRequired
};
