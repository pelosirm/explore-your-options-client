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

    it('Dispatches getCollegeInputCall on mount', () => {
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return results;
                }
            })
        );

        const dispatch = jest.fn();
        return getCollegeInputCall()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith('/search-colleges-page');
            expect(dispatch).toHaveBeenCalledWith(getCollegeInput(results));
        });
    });

});

