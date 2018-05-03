import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import NewUser from '../../components/new-user';

describe('<NewUser />', () => {
    it('Renders without crashing', () => {
        shallow(<NewUser />);
    });

});
