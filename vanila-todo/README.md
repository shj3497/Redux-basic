# Redux

store을 수정할 수 있는 유일한 방법은 action을 보내는 방법 뿐이다.

`state를 절대 mutate하지 말아야 한다.`

공식문서 : Remember to return new state objects, instead of mutating the previous state.

mutate 하는게 아니라 새로운 object를 리턴 해야한다!

<br/>

### `mutation란?`

첫번째 friends는 1명 이였는데, push()를 함으로써 2명이 되었다.
friends라는 변수에 mutation이 일어났다.

```javascript
// mutation: 변형
const friends = ["hong"];
friends.push("kim");
```

<br/>

## `예제 코드`

### [JavaScript](./src/index.js)

### [HTML](./public/index.html)

```javascript
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// dispatch()안에 들어갈 action 동작
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text: text,
    id: Date.now(),
  };
};

// dispatch()안에 들어갈 action 동작
const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id: id,
  };
};

// reducer : state는 mutate가 일어나면 안된다.
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      // splice()는 mutate한다. filter()는 새로운 배열을 리턴한다.
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

// store 생성
const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  // dispatch()에 직접 action을 써줄 수도 있지만
  // 함수안에 리턴값으로 해줄 수 도 있다.
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  // dispatch()에 직접 action을 써줄 수도 있지만
  // 함수안에 리턴값으로 해줄 수 도 있다.
  store.dispatch(deleteToDo(id));
};

// 텍스트를 입력받아 li를 만드는 과정
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.textContent = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

// store에 변경이 일어나면 리턴되는 state를 가지고 paint해준다.
store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
```
