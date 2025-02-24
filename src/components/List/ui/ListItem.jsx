import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faSquareCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Функция для преобразования секунд в формат ЧЧ:ММ:СС
const formatTime = (time) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
};

export function ListItem({
  task,
  togglePause,
  markCompleted,
  removeTask,
  handleTimeEnd,
}) {
  return (
    <li>
      {task.name}
      <CountdownCircleTimer
        isPlaying={task.isPlaying}
        colors="#218380"
        duration={task.duration}
        onComplete={() => handleTimeEnd(task.id)}
      >
        {({ remainingTime, color }) => (
          <span style={{ color }}>{formatTime(remainingTime)}</span>
        )}
      </CountdownCircleTimer>
      <FontAwesomeIcon
        icon={task.isPlaying ? faPause : faPlay}
        onClick={() => togglePause(task.id)}
        style={{ cursor: "pointer", margin: "0 5px" }}
      />
      <FontAwesomeIcon
        icon={faSquareCheck}
        onClick={() => markCompleted(task.id)}
        style={{ cursor: "pointer", margin: "0 5px" }}
      />
      <FontAwesomeIcon
        icon={faXmark}
        onClick={() => removeTask(task.id)}
        style={{ cursor: "pointer", margin: "0 5px" }}
      />
    </li>
  );
}
