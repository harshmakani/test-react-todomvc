import React, { Component } from 'react';
import './App.css';
import TodoItemList from './components/TodoItemList';
import CountInfo from './components/CountInfo';
import { isEmpty, addHelper, deleteHelper, updateHelper } from './helper';

class App extends Component {
  state = {
    list:
      typeof localStorage['todos'] != 'undefined'
        ? JSON.parse(localStorage.getItem('todos'))
        : [],
    inputValue: '',
    count:
      typeof localStorage['count'] != 'undefined'
        ? JSON.parse(localStorage.getItem('count'))
        : { active: 0, total: 0 },
  };

  /**
   * input change handler
   */
  inputHandler = evt => {
    this.setState({
      inputValue: evt.target.value,
    });
  };

  /**
   * handlers form submission and adds new todo item
   */
  addHandler = event => {
    event.preventDefault(); // stop this event.

    let obj = addHelper(this.state);
    if (!isEmpty(obj)) {
      this.setState(obj);
    }
  };

  /**
   * todo item delete handler
   */
  deleteHandler = todo => {
    let obj = deleteHelper(this.state, todo);
    if (!isEmpty(obj)) {
      this.setState(obj);
    }
  };

  /**
   * updates todo item's state (completed|inprogress)
   */
  completeHandler = todo => {
    let obj = updateHelper(this.state, todo);
    if (!isEmpty(obj)) {
      this.setState(obj);
    }
  };

  render() {
    const { count, inputValue, list } = this.state;
    return (
      <div className='container text-center'>
        <div className='jumbotron'>
          <h1 className='display-4'>Todo List</h1>
          <CountInfo count={count} />

          <hr className='my-4' />

          <form name='todo' onSubmit={this.addHandler}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                value={inputValue}
                onChange={this.inputHandler}
                autoFocus
              />
            </div>
            <button className='btn btn-primary' onClick={this.addHandler}>
              Add
            </button>
          </form>

          <hr className='my-4' />

          {list.length > 0 ? (
            <TodoItemList
              todoItemsList={list}
              deleteItem={this.deleteHandler}
              updateComplete={this.completeHandler}
            />
          ) : (
            <p className='lead'>Start adding items to your todo list now!</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
