import React from "react";
import { SendTask } from "../../SendTask";
import { ListBlock } from "../../List";
import { TasksBlock } from "../../Tasks";

export function App() {
  function name1(name, time) {
    console.log(name);
    console.log(time);
  }
  return (
    <>
      <SendTask setNameAndTime={name1} />
      <ListBlock />
      <TasksBlock />
    </>
  );
}
