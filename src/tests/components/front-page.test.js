import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import FrontPage from '../../components/front-page';

describe('<FrontPage />', () => {
    it('Renders without crashing', () => {
        shallow(<FrontPage />);
    })
});
