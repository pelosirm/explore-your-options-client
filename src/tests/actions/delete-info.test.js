import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    DELETE_INFO_SUCCESS, 
    deleteInfoSuccess, 
    deleteInfoCall

} from '../../actions/delete-info'

describe('delete info', () => {
    it('Should return the action', () => {
        const id = {};
        const action = deleteInfoSuccess(id);
        expect(action.type).toEqual(DELETE_INFO_SUCCESS);
        expect(action.results).toEqual(id);
    });
});

describe('delete record', () => {
    it('Should getCompareDataSuccess', () => {
        const info = {
             
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                }
            })
        );
   
        const dispatch = jest.fn();
        return deleteInfoCall(info)(dispatch)
        return request.then(() => {
            expect(fetch).toHaveBeenCalledWith(
            'https://explore-your-options.herokuapp.com/delete-info', {
            method: 'DELETE',
            body: JSON.stringify(info),
            dataType:"json",
            headers: {
                'Content-Type': 'application/json', 
            }
        });
        expect(dispatch).toHaveBeenCalledWith(deleteInfoSuccess());  
    });

});
})