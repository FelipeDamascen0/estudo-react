import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { Add } from './components/Add';
import { Tasks } from './components/Tasks';

function App() {
  const [task, setTask] = useState([
    {
      id: '1',
      title: 'Exemplo',
      completed: false,
    },

    {
      id: '2',
      title: 'Ler',
      completed: false,
    },

  ]);

  const handleTaskClick = (taskId) => {
    const newTask = task.map((task) => {
      if(task.id === taskId){ 
        return {...task, completed: !task.completed}
      }else{
        return task
      }
    })
    setTask(newTask)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTask = [...task, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTask(newTask)
  }

  return (
   <div className='container'>
     <h1>Minha Lista</h1>
     <Add handleTaskAddition={handleTaskAddition} />
     <Tasks tasks={task} handleTaskClick={handleTaskClick} />
  </div>
  );
}

export default App;
