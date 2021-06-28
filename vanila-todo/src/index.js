import { createStore } from 'redux'

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO"


const reducer = (state=[], action) => {
  console.log(action)
  switch(action.type){
    case ADD_TODO:
      return [...state, { text: action.text, id: action.id }];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))

const createToDo = (toDo) => {
  const li = document.createElement('li');
  li.textContent = toDo;
  ul.appendChild(li);
}

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value="";
  // createToDo(toDo);
  store.dispatch({
    type: ADD_TODO,
    text: toDo,
    id: Date.now()
  })
}

form.addEventListener('submit', onSubmit);