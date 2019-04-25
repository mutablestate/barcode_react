// Validation utility functions

import PropTypes from 'prop-types';

export const barcodeValidationRules = {
  MAX_LENGTH: 19
};

// barcodeInputStatus returns status messages
export const barcodeInputStatus = ({
  barcode,
  checksumDigit,
  maxLength = barcodeValidationRules.MAX_LENGTH
}) => {
  const count = barcode.length;
  // [1..maxLength]
  const validRange = Array.from({ length: maxLength }, (x, i) => i + 1);
  const validLength = validRange.includes(count);

  let message = '';
  switch (true) {
    case validLength:
      message = `${count} digits given (maximum ${maxLength}) and the checksum digit is ${checksumDigit}.`;
      break;
    default:
      message = `Enter up to ${maxLength} digits.`;
  }
  return message;
};

barcodeInputStatus.propTypes = {
  barcode: PropTypes.string.isRequired,
  checksumDigit: PropTypes.string.isRequired
};

// cleanBarcodeInput transforms the barcode input
export const cleanBarcodeInput = ({
  barcode,
  maxLength = barcodeValidationRules.MAX_LENGTH
}) => {
  const removeSpaces = str => str.trim();
  const removeAlphas = str => str.replace(/\D+/g, '');
  const removeExtras = (str, maxLength) => str.slice(0, maxLength);

  let cleanBarcode = barcode;
  cleanBarcode = removeSpaces(cleanBarcode);
  cleanBarcode = removeAlphas(cleanBarcode);
  cleanBarcode = removeExtras(cleanBarcode, maxLength);
  return cleanBarcode;
};

cleanBarcodeInput.propTypes = {
  barcode: PropTypes.string.isRequired
};
