import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import SearchCollegesPage from '../../components/search-colleges';

describe('<SearchCollegesPage />', () => {
    it('Renders without crashing', () => {
        shallow(<SearchCollegesPage />);
    });

});

