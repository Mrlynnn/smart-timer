import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./TaskBlock.module.css";

export function FailedTasks({ failedTasks, onDeleteTask }) {
  return (
    <div className={styles.taskColumn}>
      <h2 className={styles.h2}>Проваленные задачи</h2>
      <ul className={styles.ul}>
        {failedTasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => onDeleteTask(task.id)}
              style={{ cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
