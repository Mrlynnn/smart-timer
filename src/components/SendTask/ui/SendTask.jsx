import React, { useState } from "react";

export function SendTask({ setNameAndTime }) {
  const [taskName, setTaskName] = useState("");
  const [taskTime, setTaskTime] = useState("");

  function sendValues() {
    if (!taskName || !taskTime) return;
    setNameAndTime(taskName, taskTime);
    setTaskName("");
    setTaskTime("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Введите задачу"
        className="namingTask"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Введите время (в минутах)"
        className="setTaskTime"
        value={taskTime}
        onChange={(e) =>
          setTaskTime(e.target.value ? Number(e.target.value) : "")
        }
      />
      <button onClick={sendValues}>Добавить</button>
    </div>
  );
}
