import React from 'react';
import TodoItem from './TodoItem';

export default function Todocontainer(props) {
  let todocontainerstyle = {
    minHeight: "70vh",
  }
  return (
    <div className="container" style={todocontainerstyle}>
      <h2 className="my-3">Todos list</h2>
      {props.todoitems.length === 0 ? "No todos to display" :
        props.todoitems.map((todoitem) => {
          return (<TodoItem todoitem={todoitem} key={todoitem.sno} onDelete={props.onDelete} />);
        })
      }

    </div>
  )
}
