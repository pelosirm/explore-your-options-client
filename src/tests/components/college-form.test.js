import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../../actions'

Enzyme.configure({adapter: new Adapter()});

import CollegeForm from '../../components/college-form';


const mockCollegeInputAction = {
    type: 'GET_COLLEGE_INPUT'
};
jest.mock('../../actions', () => Object.assign({},
    require.requireActual('../../actions'),
    {
       getCollegeInputCall: jest.fn().mockImplementation(() => {
            return mockCollegeInputAction;
        })
    }
));

describe('<CollegeForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CollegeForm />);
    });

    it('Should return the action', () => {
        const action = actions.getCollegeInputCall();
        expect(action.type).toEqual(actions.GET_COLLEGE_INPUT);
    });

    it('Should dispatch fetchBoardSuccess', () => {
        const board = {
            lists: []
        };

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return colleges
                }
            })
        );

        const dispatch = jest.fn();
        return actions.getCollegeInputCall()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith('/search-colleges-page');
        });
    });






});

