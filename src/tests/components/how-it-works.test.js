import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import HowItWorks from '../../components/how-it-works';

describe('<HowItWorks />', () => {
    it('Renders without crashing', () => {
        shallow(<HowItWorks />);
    })
});
