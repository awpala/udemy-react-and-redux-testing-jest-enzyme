import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr, checkProps } from '../../../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3},
    ],
};

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return ShallowWrapper(<GuessedWords {...setupProps} />);
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});
