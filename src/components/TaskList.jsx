import React, { useContext } from "react";
import { TareaContext } from "../context/tareaContext";

const TaskList = () => {
  const { tareas } = useContext(TareaContext); // [1,2]
  console.log(tareas);
  return (
    <div>
      TaskList:
      <ul>
        {tareas.map((tareita, index) => {
          return <li key={index}>{tareita}</li>;
        })}
      </ul>
    </div>
  );
};

export default TaskList;
