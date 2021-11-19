import React, { useState } from "react";
import { ButtonAdd } from "../Button";
import './index.css';

export function Add({handleTaskAddition}){
  const [inputData, setInputData] = useState('')

  const handleInputChange = (e) => {
    setInputData(e.target.value)
  }

  const handleAddTaskClick = () => {
    handleTaskAddition(inputData)
    setInputData('')
  }

  return(
    <div className='main'>
      <input onChange={ handleInputChange } type='text' value={inputData}  id='titleTask' />
      <div className='buttonContainer'>
        <ButtonAdd onClick={handleAddTaskClick}>
          Adicionar
        </ButtonAdd>
      </div>
    </div>
  );
}