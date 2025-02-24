import React from "react";

export function CompletedTasks({ completedTasks }) {
  return (
    <div>
      <h2>Выполненные задачи</h2>
      <ul>
        {completedTasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
