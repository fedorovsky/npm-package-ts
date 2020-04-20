import * as React from 'react';
import { shallow } from 'enzyme';
import Hello from '.';

describe('<Hello />', () => {
  it('Render without crashing', () => {
    shallow(<Hello />);
  });
});
