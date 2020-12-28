import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'; // N.B. Official enzyme-adapter-react-17 not released yet as of Dec. 2020, using provisional solution in the interim

import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the Congrats component.
 * @function setup
 * @param {object} props - COmponent props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}

test('renders without error', () => {

});
test('renders no text when `success` prop is false', () => {

});
test('renders non-empty congrats message when `success` prop is true', () => {

});
