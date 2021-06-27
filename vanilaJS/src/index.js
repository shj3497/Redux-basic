import { createStore } from 'redux'

const add = document.querySelector('.add');
const minus = document.querySelector('.minus');
const number = document.querySelector('span');

const ADD = "ADD";
const MINUS = "MINUS";

// reducer는 if-else보다 switch를 권고한다.
const countModifier = (count = 0, action) => {
  switch(action.type){
    case ADD:
      return count + 1;
    case MINUS:
      return count -1;
    default:
      return count;
  }
};

// createStore()는 store를 만든다.
const countStore = createStore(countModifier);

const onChange = () => {
  // getState()는 현재 reducer의 리턴값을 반환한다.
  number.textContent = countStore.getState();
}

// subscribe()는 reducer에 변화가 생기면 무조건 실행하는 함수이다.
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
}

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
}

add.addEventListener('click', handleAdd);

minus.addEventListener('click', handleMinus);