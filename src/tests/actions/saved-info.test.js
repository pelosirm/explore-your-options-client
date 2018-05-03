import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    getUserData, 
    GET_USER_DATA_SUCCESS, 
    getUserDataSuccess
} from '../../actions/saved-info'

describe('get saved data', () => {
    it('Should return the action', () => {
        const results = {};
        const action = getUserDataSuccess(results);
        expect(action.type).toEqual(GET_USER_DATA_SUCCESS);
        expect(action.results).toEqual(results);
    });
});

describe('get user saved data', () => {
    it('Should getUserDataSuccess', () => {
        const user = {
            username : 'asda', 
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                }
            })
        );
   
        const dispatch = jest.fn();
        return getUserData(user)(dispatch)
        return request.then(() => {
            expect(fetch).toHaveBeenCalledWith(
                'https://explore-your-options.herokuapp.com/user-saved-info', {

            method: 'POST',
            body: JSON.stringify(user),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 

            }
        });
        expect(dispatch).toHaveBeenCalledWith(getUserDataSuccess());  
    });

});
})