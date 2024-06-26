import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import NewTodo from './NewTodo';
import List from './List';
import AnimatedCheckmark from './AnimatedCheckmark';
import SlayCounter from './SlayCounter';

const initialData = {
  todo: ["Buy groceries", "Walk the dog", "Do laundry", "Wash dishes", "Take out trash"],
  doing: ["Cook dinner", "Clean the house", "Workout", "Code"],
  done: ["Call Doctor", "Pay bills", "Water plants", "Meditate", "Yoga", "Read", "Study"],
};

const slayCounterGoal = 10;

function App() {
  const [listItems, setListItems] = useState(initialData);
  const [newTask, setNewTask] = useState('');
  const [draggingOverListKey, setDraggingOverListKey] = useState(null);
  const [playingCheckmarkAnimation, setPlayingCheckmarkAnimation] = useState(false);


  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    setListItems({
      ...listItems,
      todo: [newTask.trim(), ...listItems.todo],
    });
    setNewTask('');
  };

  const removeItem = (listItems, listKey, index) => {
    const list = listItems[listKey];
    const updatedList = [...list.slice(0, index), ...list.slice(index + 1)];
    return {
      ...listItems,
      [listKey]: [...updatedList],
    };
  }

  const addItem = (listItems, listKey, index, item) => {
    const list = listItems[listKey];
    const updatedList = [
      ...list.slice(0, index),
      item,
      ...list.slice(index),
    ];
    return {
      ...listItems,
      [listKey]: [...updatedList],
    };
  }

  const handleDragStart = (event, index, listKey) => {
    event.dataTransfer.setData('index', index);
    event.dataTransfer.setData('listKey', listKey);
  };

  const handleDrop = (event, index, listKey) => {
    setDraggingOverListKey(null);

    const draggedIndex = parseInt(event.dataTransfer.getData('index'));
    const draggedListKey = event.dataTransfer.getData('listKey');
    if (draggedIndex === index && draggedListKey === listKey) return;

    let newListItems = removeItem(listItems, draggedListKey, draggedIndex);
    newListItems = addItem(newListItems, listKey, index, listItems[draggedListKey][draggedIndex]);
    setListItems(newListItems);
    if (listKey === 'done' && draggedListKey !== 'done' && listItems['done'].length + 1 !== slayCounterGoal) {
      setPlayingCheckmarkAnimation(true);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnterList = (listKey) => {
    setDraggingOverListKey(listKey);
  }
  const handleDragLeaveList = () => {
    setDraggingOverListKey(null);
  }
  const handleDragOverList = (listKey) => {
    setDraggingOverListKey(listKey);
  }



  const newTodoProps = { newTask, setNewTask, handleAddTask };
  const listProps = { handleDragStart, handleDrop, handleDragOver, draggingOverListKey, handleDragEnterList, handleDragLeaveList, handleDragOverList};
  return (
    <div id="app">
      <Header />
      <div id="content">
        <div id="new-and-counter" className='display-flex align-items-center flex-wrap'>
          <div className = 'flex-grow-1'>
            <NewTodo {...newTodoProps} />
          </div>
          <SlayCounter listItems={ listItems } goal={ slayCounterGoal } />
        </div>
        <div className='overlap'>
          <div id="lists" className="display-flex flex-wrap">
            <List name="Todo" listKey='todo' items={listItems['todo']} {...listProps} />
            <List name="Doing" listKey='doing' items={listItems['doing']} {...listProps} />
            <List name="Done" listKey='done' items={listItems['done']} displayCheckmarks={true} {...listProps} />
          </div>
          <div id='animated-checkmark' className={`${playingCheckmarkAnimation ? 'animating' : ''}`}>
            { playingCheckmarkAnimation && <AnimatedCheckmark size={300} setPlayingCheckmarkAnimation={setPlayingCheckmarkAnimation} /> }
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
