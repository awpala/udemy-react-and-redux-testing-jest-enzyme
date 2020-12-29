import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../../test/testUtils';
import Input from './Input';

// N.B. Input is a connected component, which requires a more complex setup than components GuessedWords and Congrats

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper} 
 */
const setup = (initialState={}) => {
    const wrapper = shallow(<Input />);

};

describe('render', () => {
    describe('word has not been guessed', () => {
        test('renders component without error', () => {

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

        });
    });
    describe('word has been guessed', () => {
        test('renders component without error', () => {

        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

        });
    });
});
describe('update state', () => {

});