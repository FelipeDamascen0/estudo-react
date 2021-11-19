import React from "react";
import './index.css';

export function Task({task, handleTaskClick }){
  return(
    <div className='task-container' style={task.completed ? {borderLeft: "6px solid chartreuse" } : {}}>
      <div id='task-title' onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>
    </div>
  )
}