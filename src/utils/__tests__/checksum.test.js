import { generateChecksumDigit } from '../checksum';

describe('generateChecksumDigit', () => {
  test('for 10 digit barcode', () => {
    const barcode = '5489850354';
    const expectedChecksumDigit = 7;

    expect(generateChecksumDigit({ barcode })).toBe(expectedChecksumDigit);
  });
});
