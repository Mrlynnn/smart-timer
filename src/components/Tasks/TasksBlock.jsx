import React from "react";
import { FailedTasks } from "./FailedTasks";
import { CompletedTasks } from "./CompletedTasks";

export const TasksBlock = ({ completedTasks, failedTasks }) => {
  return (
    <div>
      <CompletedTasks completedTasks={completedTasks} />
      <FailedTasks failedTasks={failedTasks} />
    </div>
  );
};
