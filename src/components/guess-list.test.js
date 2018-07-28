import React from 'react';
import {shallow} from 'enzyme';

import GuessList from './guess-list';

const guesses = [24, 23, 53];

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={guesses}/>);
  });
});
