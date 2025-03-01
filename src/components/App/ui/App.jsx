import React, { useEffect, useState } from "react";
import { ListBlock } from "../../List";
import { TasksBlock } from "../../Tasks";
import { CreateTasks } from "../../CreateTask";
import styles from "./App.module.css";

export function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompleted = localStorage.getItem("completedTasks");
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  });
  const [failedTasks, setFailedTasks] = useState(() => {
    const savedFailed = localStorage.getItem("failedTasks");
    return savedFailed ? JSON.parse(savedFailed) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    localStorage.setItem("failedTasks", JSON.stringify(failedTasks));
  }, [tasks, completedTasks, failedTasks]);

  const addTask = (name, duration) => {
    const newTask = {
      id: Date.now(),
      name,
      duration: duration * 60,
      status: "active",
      isPlaying: true,
    };
    setTasks([...tasks, newTask]);
  };

  const togglePause = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isPlaying: !task.isPlaying } : task
      )
    );
  };

  const markCompleted = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setCompletedTasks([...completedTasks, task]);
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleTimeEnd = (id) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      alert(`Задача "${task.name}" провалена!`);
      setFailedTasks([...failedTasks, task]);
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };
  const deleteTask = (taskId, taskType) => {
    if (taskType === "completed") {
      setCompletedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    } else if (taskType === "failed") {
      setFailedTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== taskId)
      );
    }
  };

  return (
    <div className={styles.app}>
      <CreateTasks addTask={addTask} />
      <ListBlock
        tasks={tasks}
        togglePause={togglePause}
        markCompleted={markCompleted}
        removeTask={removeTask}
        handleTimeEnd={handleTimeEnd}
      />
      <TasksBlock
        completedTasks={completedTasks}
        failedTasks={failedTasks}
        deleteTask={deleteTask}
      />
    </div>
  );
}
