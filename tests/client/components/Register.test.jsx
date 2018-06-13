import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {Register} from '../../../client/components/Register.jsx'

Enzyme.configure({adapter: new Adapter()})

// refer to https://redux.js.org/recipes/writing-tests#example-3 to setup test
test('Register />', () => {
  const expected = 5
  const wrapper = shallow(<Register />)
  expect(wrapper.children().length).toBe(expected)
})
