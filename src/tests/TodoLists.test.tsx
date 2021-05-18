import * as React from 'react';

import {render} from 'enzyme';

import {cleanup} from "@testing-library/react";

import TodoList from "../components/todo-lists";

describe('<TodoInput />', () => {
    afterEach(cleanup);

  it('should render TodoList component', () => {
    const component = render(<TodoList />);
    expect(component).toMatchSnapshot();
  });
});