import React from 'react';
import renderer from 'react-test-renderer';

import BarcodeInput from '../BarcodeInput';

const requiredProps = {
  name: 'myFieldName',
  status: 'Enter up to 19 digits',
  maxLength: 19,
  onChange: jest.fn()
};

const optionalProps = {
  value: 'currentValue'
};

describe('BarcodeInput', () => {
  it('must render correctly with required props', () => {
    const component = renderer
      .create(<BarcodeInput {...requiredProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('must render correctly with optional props', () => {
    const updatedProps = {
      ...requiredProps,
      ...optionalProps
    };
    const component = renderer
      .create(<BarcodeInput {...updatedProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
