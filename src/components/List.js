import React from 'react';
import './List.css';

export default function List({arr}) {
    // const a = ["mango","apple","banana","banana"];
    // const temp = [];
     //    a.forEach((a, c) => {
            //        temp.push(<li key = {c}>{a}</li>);
            //    })
            
        
  return (
    <div className='body'>
      <ol>
        Fruits
      </ol>
        <ul className='list'>
        {   
            arr.map((fruit, index) =>{
                return (
                    <li key = {index}>
                        {fruit}
                    </li>
                );
            })   
        }
        </ul>
    </div>
  )
}

