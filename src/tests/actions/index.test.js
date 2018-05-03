import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
   getCareerInputCall,
   GET_CAREER_INPUT, 
   getCareerInput, 
   getCollegeInputCall, 
   GET_COLLEGE_INPUT, 
   getCollegeInput, 
   getCareerQueryCall, 
   CAREER_QUERY_SUCCESS, 
   careerQuerySuccess, 
   COLLEGE_QUERY_SUCCESS, 
   collegeQuerySuccess, 
   getCollegeQueryCall, 
   collegeDetailQuerySuccess, 
   COLLEGE_DETAIL_QUERY_SUCCESS, 
   getCollegeDetailQueryCall

} from '../../actions/index'


describe('get career input', () => {
    it('Should return the action', () => {
        const action = getCareerInput();
        expect(action.type).toEqual(GET_CAREER_INPUT);
    });
});


describe('getCareerInputCall', () => {
    it('Should dispatch getCareerInput', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    
                }
            })
        );
   
        const dispatch = jest.fn();

    return getCareerInputCall()(dispatch)
        return request.then(() => {
            expect(dispatch).toHaveBeenCalledWith('https://explore-your-options.herokuapp.com/jobs');
			expect(dispatch).toHaveBeenCalledWith(getCareerInput());        
        });
    });
});

describe('get college input', () => {
    it('Should return the action', () => {
        const action = getCollegeInput();
        expect(action.type).toEqual(GET_COLLEGE_INPUT);
    });
});


describe('getCollegeInputCall', () => {
    it('Should dispatch getCollegeInput', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    
                }
            })
        );
   
        const dispatch = jest.fn();

    return getCollegeInputCall()(dispatch)
        return request.then(() => {
            expect(dispatch).toHaveBeenCalledWith('https://explore-your-options.herokuapp.com/college');
			expect(dispatch).toHaveBeenCalledWith(getCollegeInput());        
        });
    });
});

describe('get career results for query', () => {
    it('Should return the action', () => {
        const action = careerQuerySuccess();
        expect(action.type).toEqual(CAREER_QUERY_SUCCESS);
    });
});


describe('getCareerQueryCall', () => {
	const search = {
		career : 'Accountant', 
		state : 'GA'
	}
    it('Should dispatch careerQuerySuccess', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    
                }
            })
        );
   
        const dispatch = jest.fn();

    return getCareerQueryCall(search)(dispatch)
        return request.then(() => {
            expect(dispatch).toHaveBeenCalledWith(`https://explore-your-options.herokuapp.com/career-search/?career=${search.career}&state=${search.state}`);
			expect(dispatch).toHaveBeenCalledWith(careerQuerySuccess());        
        });
    });
});

describe('get college results for query', () => {
    it('Should return the action', () => {
        const action = collegeQuerySuccess();
        expect(action.type).toEqual(COLLEGE_QUERY_SUCCESS);
    });
});


describe('getCollegeQueryCall', () => {
	const search = {
		degree : 2, 
		state : 'GA', 
		region : null, 
		speciality : 31
	}
    it('Should dispatch collegeQuerySuccess', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    
                }
            })
        );
   
        const dispatch = jest.fn();

    return getCollegeQueryCall(search)(dispatch)
        return request.then(() => {
            expect(dispatch).toHaveBeenCalledWith(`https://explore-your-options.herokuapp.com/college-search/?degree=${search.degree}&speciality=${search.speciality}&region=${search.region}&state=${search.state}`);
			expect(dispatch).toHaveBeenCalledWith(collegeQuerySuccess());        
        });
    });
});

describe('get college detail results for query', () => {
    it('Should return the action', () => {
        const action = collegeDetailQuerySuccess();
        expect(action.type).toEqual(COLLEGE_DETAIL_QUERY_SUCCESS);
    });
});


   getCollegeDetailQueryCall
describe('getCollegeQueryCall', () => {
	const search = {
		id:'1298371298319'
		}
    it('Should dispatch collegeQuerySuccess', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    
                }
            })
        );
   
        const dispatch = jest.fn();

    return getCollegeQueryCall(search)(dispatch)
        return request.then(() => {
            expect(dispatch).toHaveBeenCalledWith(`https://explore-your-options.herokuapp.com/search/${id}`);
			expect(dispatch).toHaveBeenCalledWith(collegeDetailQuerySuccess());        
        });
    });
});

