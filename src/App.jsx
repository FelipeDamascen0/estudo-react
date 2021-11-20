import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import { Add } from './components/Add';
import { Tasks } from './components/Tasks';
import { TaskDetails } from './components/TaskDetails';

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

  useEffect(() => {
    const fetchTaks = async ( ) => {
      const { data } = await axios.get(`https://jsonplaceholder.cypress.io/todos?_limit=10`)
      setTask(data)
    }

    fetchTaks();
  }, [])

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

  const handleTaskRemove = (taskId) => {
    const newTask = task.filter( (task) => task.id !== taskId)  

    setTask(newTask)
  }

  return (
    <Router>
      <div className='container'>
        <h1>Minha Lista</h1>
        <Routes>
          <Route path="/" exact  element={
            <>
             <Add handleTaskAddition={handleTaskAddition} />
             <Tasks tasks={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} />
            </>
          }/>
        </Routes>
        <Routes>
          <Route  path="/:taskTitle" exact element={<TaskDetails />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
