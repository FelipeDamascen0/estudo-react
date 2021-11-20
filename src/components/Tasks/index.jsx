import React from "react";
import { Task } from "./task";

export function Tasks({ tasks, handleTaskClick, handleTaskRemove }){
  return(
    <div>
      {
      tasks.map((task, key) => ( 
        <Task task={task} handleTaskClick={handleTaskClick} handleTaskRemove={handleTaskRemove} key={key}/>
      ))}
    </div>
  )
}