import React, { useState } from "react";
import "./Too.css";

function ToDo() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [currentTask, setCurrentTask] = useState(""); // State to store the current task input

  const addTask = () => {
    if (currentTask !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: prevTasks.length,
          value: currentTask,
          done: false,
        },
      ]);
      setCurrentTask(""); // Clear the input field
    }
  };
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const markTaskDone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: true } : task
      )
    );
  };

  const markTaskUndone = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: false } : task
      )
    );
  };

  const completedTasks = tasks.filter((task) => task.done).length;
  const totalTasks = tasks.length;

  return (
    <div className="login-box">
      <p>Todo List</p>
      <form>
        <div className="user-box">
          <input
            required
            name="taskInput"
            type="text"
            value={currentTask}
            onChange={(e) => setCurrentTask(e.target.value)}
          />
        </div>
        <div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="add"
            >
              <p className={task.done ? "done" : null}>{task.value}</p>
              <span
                className="nm"
                onClick={() => deleteTask(task.id)}
              >
                x
              </span>
              <div className="check">
                <i
                  className="fas fa-check"
                  onClick={() => markTaskDone(task.id)}
                ></i>
                <i
                  className="fas fa-times"
                  onClick={() => markTaskUndone(task.id)}
                ></i>
              </div>
            </div>
          ))}
          <div className="end">
            <button onClick={addTask}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Add
            </button>
            <h2 className={totalTasks === completedTasks ? "iff" : null}>
              {totalTasks === 0 ? null : `${completedTasks} / ${totalTasks}`}
            </h2>
            <h2 className={totalTasks !== completedTasks ? "ok" : null}>
              {totalTasks === 0 ? null : "Congratulations"}
            </h2>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDo;
