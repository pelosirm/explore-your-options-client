import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import ReturningUser from '../../components/returning-user';

describe('<ReturningUser />', () => {
    it('Renders without crashing', () => {
        shallow(<ReturningUser />);
    });

});
