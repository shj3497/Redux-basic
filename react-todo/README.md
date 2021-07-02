# React-ToDO

## [최종코드 Go](./src/routes/home.jsx)

<br/>

### 느낀점

Redux를 쓰기전에는 state에서 데이터를 직접 다루고 조작해 줬는데,  
Redux를 사용하여 간단한 예제를 짜보니까 음... state로는 input output만 해주고, 실질적인 저장공간은 Redux에서 store가 해주는 것 같다.

<br/>

## React-Redux

<br/>

store부분은 js파일로 동일하게 작성

<br/>

`index.js에서 Provider로 js파일로 작성한 store부분을 연결해준다.`

```js
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

<br/>

`App.js에서는 react-router-dom으로 route를 나눠주었다.`

```jsx
const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path={["/", "/home"]}>
          <Home text={"text"} />
        </Route>
        <Route>
          <Detail path="/detail" />
        </Route>
      </Switch>
    </Router>
  );
};
```

<br/>

`store을 연결하기 위해 connet()() 라는 함수를 사용하여 연결해준다.`

```jsx
import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  const [text, setText] = useState("");

  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
  };

  return (
    <div className="">
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{text}</ul>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  // 첫번째 인자인 state는 store에서의 state를 반환해준다.
  console.log(state);

  // 두번째 인자인 ownProps는 부모 컴포넌트로 부터 받아온 props를 반환해준다.
  console.log(ownProps);
}

// connect()함수 사용
export default connect(mapStateToProps)(Home);
```

<br/>

`connect()() 란?`

위 코드에서 필요한 부분만 가져왔다.

connect()란 Home(자식컴포넌트)로 보내는 props에 추가될 수 있도록 허용해준다.

실행 순서또한 mapStateToProps()가 먼저 실행되고 Home 컴포넌트가 리턴된다.

```jsx
const Home = (props) => {
  console.log(props); // sexy: true가 추가되서 찍힌다.
  ...
}
function mapStateToProps(state, ownProps) {
  return { sexy: true };
}

export default connect(mapStateToProps)(Home);
```

<br/>

### `함수형 프로그래밍 Currying`

> connect()() ..// react-redux의 connect 또한 currying을 이용한 것이다.  
> Currying은 여러개의 인자를 받는 함수를 단일 인자로 받는 함수의 체인을 이용하는 방식으로 바꾸는 것이다.
> [참고](https://velog.io/@kmp1007s/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%98-Currying)

```js
const sum = function (x) {
  return function (y) {
    return x + y;
  };
};

console.log(sum(2)(5)); // 7
```

<br/>
<br/>
<br/>

## form

input 태그의 value 값을 전송하기 위한 방법

### 1. onChange()

input태그에 onChange() 이벤트를 줘서 state에 저장 후 가져온다.

```jsx
const Home = (props) => {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(text);
  };

  return (
    <div className="">
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};
```

### 2. useRef()

input 태그의 value를 ref로 가져온다.

```jsx
const Home = (props) => {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    console.log(inputRef.current.value);
  };

  return (
    <div className="">
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" ref={inputRef} />
        <button>Add</button>
      </form>
      <ul></ul>
    </div>
  );
};
```
