import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
    createUser , 
    CREATE_USER_SUCCESS, 
    createUserSuccess, 
    LOGIN_USER_SUCCESS, 
    loginUserSuccess, 
    loginUser, 
    LOGOUT_USER, 
    logoutUser
} from '../../actions/user'


describe('create user', () => {
    it('Should return the action', () => {
        const user = {};
        const action = createUserSuccess(user);
        expect(action.type).toEqual(CREATE_USER_SUCCESS);
        expect(action.results).toEqual(user);
    });
});

describe('createUser', () => {
    it('Should createUserSuccess', () => {
        const user = {
            username : 'asda', 
            password : 'asasd'
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );
   
        const dispatch = jest.fn();
        return createUser(user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(
                "https://explore-your-options.herokuapp.com/users/create", 
                {"body": JSON.stringify(user)
                , "dataType": "json", "headers": {"Content-Type": "application/json"}, "method": "POST"});
        });
    });

});

describe('login user', () => {
    it('Should return the action', () => {
        const user = {};
        const action = loginUserSuccess(user);
        expect(action.type).toEqual(LOGIN_USER_SUCCESS);
        expect(action.results).toEqual(user);
    });
});


describe('loginUser', () => {
    it('Should loginUserSuccess', () => {
        const user = {
            username : 'asda', 
            password : 'asasd'
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return user;
                }
            })
        );
   
        const dispatch = jest.fn();
        return loginUser(user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(
                'https://explore-your-options.herokuapp.com/users/login', 
                {"body": JSON.stringify(user)
                , "dataType": "json", "headers": {"Content-Type": "application/json"}, "method": "POST"});
        });
    });
});



describe('logoutUser', () => {
    it('Should return the action', () => {
        const user = {};
        const action = logoutUser();
        expect(action.type).toEqual(LOGOUT_USER);
    });
});



