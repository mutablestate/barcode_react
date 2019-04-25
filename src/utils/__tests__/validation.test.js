import { cleanBarcodeInput, barcodeInputStatus } from '../validation';

describe('cleanBarcodeInput', () => {
  // maxLength defaults to 19
  test('removes extra digits', () => {
    const twentyDigit = '12345678901234567890';
    const nineteenDigit = '1234567890123456789';

    expect(cleanBarcodeInput({ barcode: twentyDigit })).toBe(nineteenDigit);
  });

  test('removes alphas', () => {
    const digitsAndAlphas = '1a2b3c';
    const onlyDigits = '123';

    expect(cleanBarcodeInput({ barcode: digitsAndAlphas })).toBe(onlyDigits);
  });

  test('removes spaces', () => {
    const digitsAndSpaces = ' 12  3 ';
    const onlyDigits = '123';

    expect(cleanBarcodeInput({ barcode: digitsAndSpaces })).toBe(onlyDigits);
  });
});

describe('barcodeInputStatus', () => {
  // maxLength defaults to 19
  test('returns valid length message', () => {
    const empty = '';

    expect(barcodeInputStatus({ barcode: empty })).toContain('up to 19 digits');
  });

  test('returns valid length message', () => {
    const fiveDigit = '12345';

    expect(barcodeInputStatus({ barcode: fiveDigit })).toContain(
      '5 digits given'
    );
  });
});
