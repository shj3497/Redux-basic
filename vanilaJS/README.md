# Redux

```javascript
import { createStore } from "redux";

const reducer = (state, action) => {
  if (action.key === "value") {
    return state;
  } else {
    return state;
  }
};

const store = createStore(reducer);
store.dispatch({ key: "value" });

const onChange = () => {
  console.log("store에 변화가 생겼습니다!");
};
store.subscribe(onChange);

console.log(store.getState());
```

## `Reducer`

Reducer는 data를 수정해 주는 함수로, reducer가 return 하는것은 application에 있는 데이터가 된다.

action는 redux에서 함수를 부를때 쓰는 두번째 parameter 또는 argument로 reducer과 소통하기 위한 방법

<br/>

## `CreateStore`

createStore는 reducer를 요구한다!

store는 data를 저장해 주는 곳이다.

<br/>

## `dispatch`

Reducer에게 action을 보낸다.

<br/>

## `subsribe`

data에 변화가 생겼을 때 subscribe 함수를 무조건 실행한다.

<br/>

## `getState()`

현재 data의 상태를 출력한다.

<br/>

## `예제 코드`

### [JavaScript](./src/index.js)

### [HTML](./public/index.html)

```html
<body>
  <button class="add">Add</button>
  <span>0</span>
  <button class="minus">Minus</button>
</body>
```

```javascript
import { createStore } from "redux";

const add = document.querySelector(".add");
const minus = document.querySelector(".minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

// reducer는 if-else보다 switch를 권고한다.
const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// createStore()는 store를 만든다.
const countStore = createStore(countModifier);

const onChange = () => {
  // getState()는 현재 reducer의 리턴값을 반환한다.
  number.textContent = countStore.getState();
};

// subscribe()는 reducer에 변화가 생기면 무조건 실행하는 함수이다.
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);

minus.addEventListener("click", handleMinus);
```
