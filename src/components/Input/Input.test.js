import React from 'react';
import { shallow } from 'enzyme';
import { createStore } from 'redux';

import { findByTestAttr, storeFactory } from '../../../test/testUtils';
import Input from './Input';
import success from '../../reducers/successReducer'; // N.B. using success reducer directly at this stage -- storeFactory() is currently breaking tests (cf. https://stackoverflow.com/questions/40053159/)

// N.B. Input is a Redux-connected component, which requires a more complex setup than components GuessedWords and Congrats

/**
 * Factory function to create a ShallowWrapper for the Input component.
 * @function setup
 * @param {object} initialState - Initial state for this setup.
 * @returns {ShallowWrapper} 
 */
const setup = (initialState={}) => {
    // const store = storeFactory(initialState); // N.B. using success reducer directly at this stage -- storeFactory() is currently breaking tests (cf. https://stackoverflow.com/questions/40053159/)
    const store = createStore(success, initialState);

    const wrapper = shallow(<Input store={store} />).dive().dive();
    // N.B. in the previous line, shallow(<Input store={store} />) returns the following:
    // <ContextProvider value={{...}}>
    //   <Input store={{...}} dispatch={[Function: dispatch]} />
    // </ContextProvider>
    // Therefore, method .dive() is required to access rendered Input component
    
    // console.log(wrapper.debug()); // logs component in console during npm test
    
    return wrapper;
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { isSuccess: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { isSuccess: true };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1);
        });
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0);
        });
        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        });
    });
});
