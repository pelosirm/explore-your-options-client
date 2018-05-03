import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    GET_COMPARE_DATA_SUCCESS, 
    getCompareDataSuccess, 
    getCompareData

} from '../../actions/compare'

describe('get compare', () => {
    it('Should return the action', () => {
        const results = {};
        const action = getCompareDataSuccess(results);
        expect(action.type).toEqual(GET_COMPARE_DATA_SUCCESS);
        expect(action.results).toEqual(results);
    });
});

describe('get compare data', () => {
    it('Should getCompareDataSuccess', () => {
        const query = {
             
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                }
            })
        );
   
        const dispatch = jest.fn();
        return getCompareData(query)(dispatch)
        return request.then(() => {
            expect(fetch).toHaveBeenCalledWith(
            'https://explore-your-options.herokuapp.com/compare', {

            method: 'POST',
            body: JSON.stringify(query),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        });
        expect(dispatch).toHaveBeenCalledWith(getCompareDataSuccess());  
    });

});
})