import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import RenderSavedCollegeData from '../../components/saved-college-data';

describe('<RenderSavedCollegeData />', () => {
    it('Renders without crashing', () => {
    	let seedCollege = [ {
    		INSTNM : "Oklahoma Wesleyan University",
			_id :'21000'
    	}]
        shallow(<RenderSavedCollegeData colleges={seedCollege} />);
    });

});
