import * as React from 'react';

import {shallow} from 'enzyme';

import {cleanup} from "@testing-library/react";

import TodoInput from "../components/todo-input";

describe('<TodoInput />', () => {
    afterEach(cleanup);

  it('should render TodoInput component', () => {
    const component = shallow(<TodoInput />);
    expect(component).toMatchSnapshot();
  });
});