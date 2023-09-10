import Axios from 'axios'
import React, { useState } from 'react'

export default function ViewAllTasks() {

  const [tasks, setTasks] = useState([{id: 1, task: 'hello this is a task'}]);

  
  const viewTasks = ()=>{
    Axios.get('http://localhost:3001/tasks').then( 
      (response)=>{
        console.log(response.data);
      }
    )
  }


  return (
    <div>
        <button className='btn btn-primary' onClick={viewTasks}>View Tasks</button>
        { tasks.map((val, key)=>{
            return <div>{val.task}</div>
        })}
    </div>
  )
}
