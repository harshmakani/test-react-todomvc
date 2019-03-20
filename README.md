## TODO App in React
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Simple Todo application with storing data in localStorage.

Project structure is divided in 4 components.
App.js is where state is being managed of the application. It also renders the input form and consists of TodoItemList component which renders the todo list.

TodoItemList component is a functional component as there is no need to manage state and props are being passed from App.js to be consumed by TodoItemList's child component which is TodoItem. TodoItem renders each row of TodoItem.

TodoItem needs delete and updateComplete functions to be passed by it's parent component to update the state of the application. i.e. either delete the item or update the item's completed|inprogress state.

App.js also has CountInfo functional component to display Active | Total counts of todo items. 

Project also has helper directory with index.js file
That file consists of actual logic to add, delete and update the state of the todo items.

I used Bootstrap and FontAwesome for quick layouting.

Demo Link: 


To run this in your local environment follow below mentioned steps:
1) clone this repo by going to your terminal and typing:  `git clone https://github.com/harshmakani/test-react-todomvc.git`
2) navigate to test-react-todomvc directory.
3) type in terminal: `npm install`
4) type in terminal: `npm start`

## Demo Link
[https://harshmakani.github.io/test-react-todomvc/](https://harshmakani.github.io/test-react-todomvc)
