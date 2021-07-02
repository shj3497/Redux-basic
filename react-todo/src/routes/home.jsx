import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import ToDo from '../components/toDo';

const Home = (props) => {
  // console.log(props);
  const [text, setText] = useState('');

  const onChange = (event) => {
    setText(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    //! 하단에서 정의한 addToDo라는 함수
    props.addToDo(text);
    setText('');
  }

  const onDelete = (id) => {
    console.log(id);
    props.deleteToDo(id);
  }

  
  return(
    <div className="">
      <h1>ToDo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {
          props.toDos.map(todo => <ToDo key={todo.id} id={todo.id} text={todo.text} onDelete={onDelete} />)
        }
      </ul>
    </div>
  )
}

function mapStateToProps(state, ownProps){
  return {toDos: state}
}

function mapDispatchToProps(dispatch, ownProps){
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
    deleteToDo: (id) => dispatch(actionCreators.deleteToDo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// 만약 mapStateToProps는 필요하지 않고, mapDispatchToProps는 필요한 경우
// export default connect(null, mapDispatchToProps)(Home) 로 하면된다.