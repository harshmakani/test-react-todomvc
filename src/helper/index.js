/**
 * Helper function to add new todo item
 * @param {Object} state
 * @param {Object} todo
 */
export const addHelper = state => {
  let todos = state.list;
  let count = state.count;
  let newInput = state.inputValue.trim();
  const retObj = {};

  if (newInput) {
    // update active and total counter and add new item to todos array
    count.active++;
    count.total++;
    todos.push({ value: newInput, done: false });

    //persist data to localstorage
    _saveData(todos, count);
    retObj.list = todos;
    retObj.inputValue = '';
    retObj.count = count;

    return retObj;
  }
};

/**
 * Helper function to delete todo item
 * @param {Object} state
 * @param {Object} todo
 */
export const deleteHelper = (state, todo) => {
  let todos = state.list;
  let count = state.count;
  const retObj = {}; // return object which will update be used to setState()

  let index = todos.indexOf(todo); // get the index of todo item

  // update active and total counter
  if (!todos[index].done) {
    count.active--;
  }
  count.total--;
  todos.splice(todos.indexOf(todo), 1);

  //persist data to localstorage
  _saveData(todos, count);
  retObj.list = todos;
  retObj.count = count;
  return retObj;
};

/**
 * Helper function to toggle todo item state (completed|inprogress)
 * @param {Object} state
 * @param {Object} todo
 */
export const updateHelper = (state, todo) => {
  let todos = state.list;
  let count = state.count;
  const retObj = {}; // return object which will update be used to setState()
  let index = todos.indexOf(todo); // get the index of todo item

  todos[index].done = !todos[index].done; // toggle todo item state (completed|inprogress)

  // update active and total counter
  if (todos[index].done) {
    count.active--;
  } else {
    count.active++;
  }

  //persist data to localstorage
  _saveData(todos, count);
  retObj.list = todos;
  retObj.count = count;
  return retObj;
};

/**
 * Checks if Object is empty
 * @param {Object} obj
 */
export const isEmpty = obj => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

/**
 * Save data to localstorage
 * @param {Object} todos
 * @param {Object} count
 */
const _saveData = (todos, count) => {
  localStorage.setItem('todos', JSON.stringify(todos));
  localStorage.setItem('count', JSON.stringify(count));
};
