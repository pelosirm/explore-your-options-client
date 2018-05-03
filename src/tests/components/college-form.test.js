import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actions from '../../actions'

Enzyme.configure({adapter: new Adapter()});

import CollegeForm from '../../components/college-form';


describe('<CollegeForm />', () => {
    it('Renders without crashing', () => {
        shallow(<CollegeForm />);
    });


    it('Should dispatch getCollegeInput', () => {

        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return board;
                }
            })
        );

        const dispatch = jest.fn();
        return actions.getCollegeInputCall()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith('https://explore-your-options.herokuapp.com/college');
        });
    });

});

