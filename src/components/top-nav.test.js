import React from 'react';
import {shallow} from 'enzyme';

import TopNav from './top-nav';

const guesses = [24, 23, 53];

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav/>);
  });
});
