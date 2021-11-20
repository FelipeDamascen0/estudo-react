import React from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';

import { ButtonAdd } from '../Button';
import './index.css';


export function TaskDetails(){
  const params = useParams();
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/')
  }

  return(
    <>
      <div className='back-button-container'>
        <ButtonAdd onClick={backToHome}> Voltar </ButtonAdd>
      </div>

      <div className="task-details-container">
        <h2>{ params.taskTitle }</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum assumenda aperiam maxime, 
          tempore delectus excepturi atque, quo voluptas doloribus nemo libero magnam odit laborum 
          minima accusamus nostrum quasi eius quia!
        </p>
      </div>
    </>
  );
}