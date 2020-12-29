import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Input from './Input';

// N.B. Input is a Redux-connected component, which requires a more complex setup than components GuessedWords and Congrats

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper} 
 */
const setup = (initialState={}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    // N.B. in the previous line, shallow(<Input store={store} />) returns the following:
    // <ContextProvider value={{...}}>
    //   <Input store={{...}} dispatch={[Function: dispatch]} />
    // </ContextProvider>
    // Therefore, method .dive() is required to access rendered Input component
    return wrapper;
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