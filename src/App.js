import React, { useState, useRef } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import NewTodo from './NewTodo';
import List from './List';

const initialData = {
  todo: ["Buy groceries", "Walk the dog", "Do laundry", "Wash dishes"],
  doing: [],
  done: [],
};


function App() {
  const [listItems, setListItems] = useState(initialData);
  const [newTask, setNewTask] = useState('');
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setListItems({
      ...listItems,
      todo: [newTask.trim(), ...listItems.todo],
    });
    setNewTask('');
  };
  const newTodoProps = { newTask, setNewTask, handleAddTask };
  return (
    <div id="app">
      <Header />
      <div id="content">

        <NewTodo {...newTodoProps} />
        <div id="lists" className="display-flex flex-wrap">
          <List name="Todo" items={listItems['todo']} />
          <List name="Doing" />
          <List name="Done" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
