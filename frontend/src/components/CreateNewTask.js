import React, { useState } from 'react'
import Axios from 'axios'

export default function CreateNewTask() {

  const [ text, setText ] = useState('');

  const addTask = ()=>{
    console.log(text);
    Axios.post( 'http://localhost:3001/addTask', {text: text}).then( ()=>{ console.log('success')});
  }


  return (
    <div className= 'container container-fluid'>
                            
          <div className="input-group mb-3">
            <span className="input-group-text" id="text">Create New Task</span>
            <input type="text" className="form-control" aria-label="name input" aria-describedby="inputGroup-sizing-default" onChange={(event)=>{ setText(event.target.value)}}/>
            <button className="btn btn-primary" onClick={addTask} > Add </button>
          </div>
          
    </div>
  )
}
