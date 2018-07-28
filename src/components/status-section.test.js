import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

const guesses = [24, 23, 53];

describe('<StatusSection />', () => {
  it('Renders without crashing', () => {
    shallow(<StatusSection guesses={guesses}/>);
  });
});
