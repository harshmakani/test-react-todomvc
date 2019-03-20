import React from 'react';

const TodoItem = ({ todo, updateComplete, deleteItem }) => {
  return (
    <li
      className={
        'list-group-item d-flex justify-content-between align-items-center ' +
        (todo.done ? 'completed' : '')
      }
    >
      <input
        type='checkbox'
        onChange={() => {
          updateComplete(todo); //call updateHandler in App.js for current todo item. i.e.to change state of current todo item(completed | inprogress)
        }}
        checked={todo.done}
      />
      {todo.value}
      <span
        className='badge badge-danger badge-pill remove-item'
        title='Remove'
      >
        <i
          onClick={() => {
            deleteItem(todo); //call deleteHandler in App.js for current todo item. i.e.to delete current todo item
          }}
          className='fa fa-remove'
        />
      </span>
    </li>
  );
};

export default TodoItem;
