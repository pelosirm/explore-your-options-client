import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import Header from '../../components/header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    })
});
