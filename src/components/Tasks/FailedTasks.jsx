import React from "react";

export function FailedTasks({ failedTasks }) {
  return (
    <div>
      <h2>Проваленные задачи</h2>
      <ul>
        {failedTasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
