import React from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({ todoItemsList, deleteItem, updateComplete }) => {
  let renderTodoItems = todoItemsList.map((todoItem, index) => {
    return (
      <TodoItem
        todo={todoItem}
        deleteItem={deleteItem}
        updateComplete={updateComplete}
        key={index}
      />
    );
  });
  return <ul className='list-group'>{renderTodoItems}</ul>;
};

export default TodoItemList;
