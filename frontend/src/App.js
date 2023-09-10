import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [text, setText] = useState("");

  const addTask = () => {
    console.log(text);
    Axios.post("http://localhost:3001/addTask", { text: text }).then(() => {
      console.log("success");
      viewTasks();
    });
  };

  const [tasks, setTasks] = useState([]);

  const viewTasks = () => {
    Axios.get("http://localhost:3001/tasks").then((response) => {
      console.log(response.data);
      setTasks(response.data);
    });
  };

  // viewTasks();

  useEffect(()=>{
    viewTasks();
  }, [tasks]);

  return (
    <div className="App my-5">
      <div className="container container-fluid">
        <div className="input-group mb-3">
          <span className="input-group-text" id="text">
            Create New Task
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="name input"
            aria-describedby="inputGroup-sizing-default"
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
          <button className="btn btn-primary" onClick={addTask}>
            Add
          </button>
        </div>
      </div>

      <hr />

      <div>
        {/* <button className="btn btn-primary" onClick={viewTasks}>
          View Tasks
        </button> */}
        {tasks.map((val, key) => {
          // return <div>{val.task}</div>;
          return <div class="container alert alert-primary my-1" role="alert">
            {val.task}
          </div>;
        })}
      </div>
    </div>
  );
}

export default App;
