import React from 'react';
import renderer from 'react-test-renderer';

import BarcodeChart from '../BarcodeChart';

const requiredProps = {
  bars: [1, 2, 3, 4],
  checksumDigit: 1,
  primaryColor: 'blue',
  secondaryColor: 'purple'
};

describe('BarcodeChart', () => {
  it('must render correctly with required props', () => {
    const component = renderer
      .create(<BarcodeChart {...requiredProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
