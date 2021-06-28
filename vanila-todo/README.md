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
