import React from "react";
import { FailedTasks } from "./FailedTasks";
import { CompletedTasks } from "./CompletedTasks";

export function TasksBlock() {
  return (
    <div>
      <CompletedTasks />
      <FailedTasks />
    </div>
  );
}
