import React from 'react';
import './index.css';

export function ButtonAdd({children, onClick}){
  return(
    <div className='buttonAdd'>
      <button onClick={onClick}> {children} </button> 
    </div>
  );
}