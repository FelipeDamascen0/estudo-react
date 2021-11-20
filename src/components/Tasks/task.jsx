import React from "react";
import { VscClose, VscInfo } from 'react-icons/vsc';
import { useNavigate} from "react-router-dom";
//versao 6 e useNavigate nao useHistory

import './index.css';

export function Task({task, handleTaskClick, handleTaskRemove }){
  const history = useNavigate();

  const taskNavigation = () => {
    history(`/${task.title}`)
    //essa função pega o title para navegar para o pagina do titulo
  }

  return(
    <div className='task-container' style={task.completed ? {borderLeft: "6px solid chartreuse" } : {}}>

      <div className='task-title' onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className='icons'>
        <button className='see-task-datails' onClick={ taskNavigation }> <VscInfo size={15} color='chartreuse' /> </button>
        <button className='button-remove' onClick={() => handleTaskRemove(task.id)}> <VscClose size={15} color='chartreuse' /> </button>
      </div>

    </div>
  )
}