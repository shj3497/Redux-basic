import React from 'react';
import { Link } from 'react-router-dom';

const ToDo = ({text, onDelete, id}) => {
  
  return(
    <li>
      <Link to={`/detail/${id}`}>
        {text}
      </Link>
      <button onClick={() => {onDelete(id)}} >DEL</button>
    </li>
  )
}

export default ToDo;