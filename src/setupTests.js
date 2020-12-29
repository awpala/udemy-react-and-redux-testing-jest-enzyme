// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import Enzyme from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'; // N.B. Official enzyme-adapter-react-17 not released yet as of Dec. 2020, using provisional solution in the interim

Enzyme.configure({ adapter: new EnzymeAdapter() });