import React, { useState } from "react";
import styles from "../ui/CreateTasks.module.css";

export function CreateTasks({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  function handleSubmit() {
    if (!taskName.trim()) {
      alert("Введите название задачи!");
      return;
    }

    const time = Number(taskTime);
    if (!taskTime || isNaN(time) || time <= 0) {
      alert("Введите время больше 0!");
      return;
    }

    addTask(taskName, time);
    setTaskName("");
    setTaskTime("");
  }

  return (
    <div>
      <h1 className={styles.h1}>Smart Timer</h1>
      <input
        className={styles.taskName}
        type="text"
        placeholder="Введите задачу"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        className={styles.taskTime}
        type="number"
        placeholder="Введите время (в минутах)"
        value={taskTime}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "0") return;
          setTaskTime(value);
        }}
        min="1"
      />
      <button onClick={handleSubmit} className={styles.btn}>
        Добавить
      </button>
    </div>
  );
}
