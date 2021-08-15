import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Todocontainer from './components/Todocontainer';
import Addtodo from './components/Addtodo';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import About from './components/About';

export default function App() {


  let initTodo;

  if (localStorage.getItem("todoitems") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todoitems"));
  }


  const onDelete = (todoitem) => {
    console.log("deleted", todoitem);
    setTodoitems(todoitems.filter((e) => {
      return e !== todoitem;
    }));

    localStorage.setItem("todoitems", JSON.stringify(todoitems));
  }

  const addTodo = (title, desc) => {
    console.log("adding", title, desc);
    let sno;
    if (todoitems.length === 0) {
      sno = 0;
    } else {
      sno = todoitems[todoitems.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    console.log(mytodo);
    setTodoitems([...todoitems, mytodo]);
  }
  const [todoitems, setTodoitems] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todoitems", JSON.stringify(todoitems));
  }, [todoitems])

  return (
    <>
      <Router>
        <Navbar title="My React Todo" />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo addTodo={addTodo} />
                <Todocontainer todoitems={todoitems} onDelete={onDelete} />
              </>
            )
             }}>

          </Route>
          <Route path="/about">
             <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

