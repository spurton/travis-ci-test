import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const app = shallow(<App />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
})

it('Inializes the `state` with an empty list of gifts', () => {
  expect(app.state().gifts).toEqual([]);
})

it('Adds new gifts to the `state` when you click `add gift`', () => {
  app.find('.btn-add').simulate('click');

  expect(app.state().gifts).toEqual([{ id: 1 }]);
})

it('Displays a current gift count', () => {
  app.find('.btn-add').simulate('click');

  expect(app.find('#gift-count').text()).toEqual("1")
})