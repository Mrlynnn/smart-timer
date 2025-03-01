import React from "react";
import { ListItem } from "./ListItem";
import styles from "../ui/ListBlock.module.css";

export function ListBlock({
  tasks,
  togglePause,
  markCompleted,
  removeTask,
  handleTimeEnd,
}) {
  return (
    <ul className={styles.ul}>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          task={task}
          togglePause={togglePause}
          markCompleted={markCompleted}
          removeTask={removeTask}
          handleTimeEnd={handleTimeEnd}
        />
      ))}
    </ul>
  );
}
