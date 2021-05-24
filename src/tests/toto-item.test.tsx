import * as React from 'react';
import { render, cleanup } from '@testing-library/react';
// import { render, cleanup, fireEvent } from '@testing-library/react';

import TodoItem from '../components/todo-list/todo-item';

import TodoProvider from '../context';

describe('TodoItem test', () => {
  afterEach(() => cleanup());

  test('should render TodoItem component', () => {
    const item = {
      id: '001',
      date: '23.05.2021, 23:36:38',
      text: 'git',
    };

    const conteiner = render(
      <TodoProvider>
        <TodoItem todo={item} key={item.id} />
      </TodoProvider>,
    );
    const itemElement = conteiner.getByTestId('itemComponent');
    expect(itemElement).toBeDefined();
  });

  // Сдесь хотел получить кнопку, и проверить вызов функции todoDeletehandler
  // и отследить удалился ли компонент

  // test('clich on the delete button', () => {
  //   const conteiner = render(
  //     <TodoProvider>
  //       <TodoItem />
  //     </TodoProvider>,
  //   );
  //   const listElement = conteiner.getByTestId('listComponent');
  //   const deleteBtn = listElement.getByText('Delete');
  //   fireEvent.click(deleteBtn);
  // });
});
