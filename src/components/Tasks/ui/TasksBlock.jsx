import React from "react";
import { FailedTasks } from "./FailedTasks";
import { CompletedTasks } from "./CompletedTasks";
import styles from "./TaskBlock.module.css";

export const TasksBlock = ({ completedTasks, failedTasks, deleteTask }) => {
  return (
    <div className={styles.tasksBlock}>
      <CompletedTasks
        completedTasks={completedTasks}
        onDeleteTask={(taskId) => deleteTask(taskId, "completed")}
      />
      <FailedTasks
        failedTasks={failedTasks}
        onDeleteTask={(taskId) => deleteTask(taskId, "failed")}
      />
    </div>
  );
};
