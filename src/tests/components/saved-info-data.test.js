import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import RenderSavedCareerData from '../../components/saved-info-data';

describe('<RenderSavedCareerData />', () => {
    it('Renders without crashing', () => {
    	let seedCareer = [ {
    		career : "Actuaries",
    		education :"Bachelor's degree",
			experience : "None",
			nat_a_median : "100610",
			st_a_median : "98490",
			state : "Arkansas", 
			user : "123", 
			_id :'21000'
    	}]
        shallow(<RenderSavedCareerData careers={seedCareer} />);
    });

});

