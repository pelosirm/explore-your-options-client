import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    SAVE_CAREER_SUCCESS, 
    saveCareerSuccess, 
    postCareerData, 
    SAVE_COLLEGE_SUCCESS, 
    saveCollegeSuccess, 
    postCollegeData, 
    postCollegeSuccess, 
    postCollegeDetailData, 
    POST_COLLEGE_SUCCESS

} from '../../actions/save-data'

describe('save career', () => {
    it('Should return the action', () => {
        const results = {};
        const action = saveCareerSuccess(results);
        expect(action.type).toEqual(SAVE_CAREER_SUCCESS);
        expect(action.results).toEqual(results);
    });
});

describe('save career data', () => {
    it('Should saveCareerSuccess', () => {
        const career = {
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                }
            })
        );
   
        const dispatch = jest.fn();
        return postCareerData(career)(dispatch)
        return request.then(() => {
            expect(fetch).toHaveBeenCalledWith(
                'https://explore-your-options.herokuapp.com/career/create-new', {
            method: 'POST',
            body: JSON.stringify(career),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        });
        expect(dispatch).toHaveBeenCalledWith(saveCareerSuccess());  
    });

});
})

describe('save college', () => {
    it('Should return the action', () => {
        const results = {};
        const action = saveCollegeSuccess(results);
        expect(action.type).toEqual(SAVE_COLLEGE_SUCCESS);
        expect(action.results).toEqual(results);
    });
});

describe('save college data', () => {
    it('Should saveCollegeSuccess', () => {
        const college = {
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                }
            })
        );
   
        const dispatch = jest.fn();
        return postCollegeData(college)(dispatch)
        return request.then(() => {
            expect(fetch).toHaveBeenCalledWith(
            'https://explore-your-options.herokuapp.com/career/create-new', {
            method: 'POST',
            body: JSON.stringify(college),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        });
        expect(dispatch).toHaveBeenCalledWith(saveCollegeSuccess());  
    });

});
})

describe('post college detail', () => {
    it('Should return the action', () => {
        const results = {};
        const action = postCollegeSuccess(results);
        expect(action.type).toEqual(POST_COLLEGE_SUCCESS);
        expect(action.results).toEqual(results);
    });
});

describe('save college detail data', () => {
    it('Should postCollegeDetailData', () => {
        const college = {
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                }
            })
        );
   
        const dispatch = jest.fn();
        return postCollegeDetailData(college)(dispatch)
        return request.then(() => {
            expect(fetch).toHaveBeenCalledWith(
           'https://explore-your-options.herokuapp.com/save-info', {
            method: 'POST',
            body: JSON.stringify(college),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        });
        expect(dispatch).toHaveBeenCalledWith(postCollegeSuccess());  
    });

});
})