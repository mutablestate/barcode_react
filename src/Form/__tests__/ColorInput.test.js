import React from 'react';
import renderer from 'react-test-renderer';

import ColorInput from '../ColorInput';

const requiredProps = {
  label: 'LABEL',
  name: 'primaryColor',
  color: 'red',
  onChange: jest.fn()
};

describe('ColorInput', () => {
  it('must render correctly with required props', () => {
    const component = renderer
      .create(<ColorInput {...requiredProps} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
