import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import Tracking from '../components/LookupTrack';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {generateLabel} from '../components/FormComponent';
const faker = require('faker');

configure({ adapter: new Adapter() });

// Testing Component
it("Renders succesfully", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tracking></Tracking>, div);
});