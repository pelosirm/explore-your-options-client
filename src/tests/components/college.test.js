import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import College from '../../components/college';

describe('<College />', () => {
    it('Renders without crashing', () => {
    	let seedCollege = [{
    		CITY:"Bartlesville",
			GRAD_DEBT_MDN_SUPP:20881,
			INSTNM :"Oklahoma Wesleyan University",
			C150_L4_POOLED_SUPP:0.4208,
			NPT4:"21444",
			STABBR:"OK"
    	}]
        shallow(<College college ={seedCollege}/>);
    })
});




