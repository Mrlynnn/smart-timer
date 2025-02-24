import React, { useState } from "react";

export function CreateTasks({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  function handleSubmit() {
    if (!taskName || !taskTime) return;
    addTask(taskName, Number(taskTime));
    setTaskName("");
    setTaskTime("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Введите задачу"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Введите время (в минутах)"
        value={taskTime}
        onChange={(e) => setTaskTime(e.target.value)}
      />
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
}
