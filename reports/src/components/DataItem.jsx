import React from 'react';
import MyBar from './MyBar';
import './DataItem.css';

function DataItem(props) {
  const { title, description, choice, option, pro, con, todos, data } = props;
  const todoItems = todos.map((todo, index) => (
    <li key={index}>
      {todo.main}
      <ul>
        {todo.sub.map((mapped, i) => {
          return <li key={i}>{mapped}</li>;
        })}
      </ul>
    </li>
  ));
  return (
    <div>
      <p>
        <span className='bold'>{title}</span>: {description}
      </p>
      <p className='bold pad'>
        {' '}
        You chose to {option} {data[choice]} out of 8 times
      </p>
      <MyBar choice={data[choice]}></MyBar>
      <p>
        <span className='bold underline'>Pros:</span> {pro}
      </p>
      <p>
        <span className='bold underline'>Cons:</span> {con}
      </p>
      <p>
        <span className='bold underline'>Things you can do:</span>
      </p>
      <ul>{todoItems}</ul>
      <br />
    </div>
  );
}

export default DataItem;
