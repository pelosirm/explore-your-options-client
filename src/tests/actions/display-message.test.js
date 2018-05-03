import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import {
DISPLAY_MESSAGE, 
displayMessage, 
hideDisplayMessage, 
HIDE_DISPLAY_MESSAGE, 
LOADING_TRUE, 
loadingTrue, 
LOADING_FALSE, 
loadingFalse

} from '../../actions/display-message'

describe('display message', () => {
    it('Should return the action', () => {
        const message ='';
        const action = displayMessage(message);
        expect(action.type).toEqual(DISPLAY_MESSAGE);
    });
});

describe('hide message', () => {
    it('Should return the action', () => {
        const message ='';
        const action = hideDisplayMessage(message);
        expect(action.type).toEqual(HIDE_DISPLAY_MESSAGE);
    });
});

describe('loading true', () => {
    it('Should return the action', () => {
        const action = loadingTrue();
        expect(action.type).toEqual(LOADING_TRUE);
    });
});

describe('loading false', () => {
    it('Should return the action', () => {
        const action = loadingFalse();
        expect(action.type).toEqual(LOADING_FALSE);
    });
});