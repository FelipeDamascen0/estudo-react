import React from "react";
import { Task } from "./task";

export function Tasks({ tasks, handleTaskClick }){
  return(
    <div>
      {
      tasks.map((task, key) => ( 
        <Task task={task} handleTaskClick={handleTaskClick} key={key}/>
      ))}
    </div>
  )
}