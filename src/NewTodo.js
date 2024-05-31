import React from 'react';

const NewTodo = ({ newTask, setNewTask, handleAddTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTask();
  };

  return (
    <div id='new-todo'>
      <form onSubmit={handleSubmit}>
        <div className='input-button-wrapper display-flex flex-between'>
          <input className='flex-grow-1 height-100'
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button className='primary-button height-100' type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;