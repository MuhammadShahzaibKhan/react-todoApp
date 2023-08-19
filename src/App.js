import { useState } from "react";
import icon from "./images/icon.png";
import "./App.css";

function App() {
  let [value, setValue] = useState("");
  let [list, setList] = useState([]);

  let add = () => {
    list.push(value);
    setList([...list]);
    setValue("");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="main">
          <div className="Todo-app">
            <h3>
              To-Do List <img src={icon} />
            </h3>
            <div className="input-main">
              <input
                type="text"
                placeholder="Enter your Task"
                value={value}
                className="input-box"
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit" onClick={add}>
                Add Task
              </button>
            </div>
            <div className="list-main">
              {list.map((x, i) => (
                <li key={i} className="list">
                  {x}{" "}
                  <button
                    className="editbtn"
                    onClick={(e) =>
                      console.log(
                        (e.target.parentNode.firstChild.nodeValue =
                          prompt("Edit your task"))
                      )
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="deletebtn"
                    onClick={(e) => e.target.parentNode.remove()}
                  >
                    Delete
                  </button>{" "}
                </li>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
