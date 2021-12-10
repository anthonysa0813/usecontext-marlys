import React, { useContext, useEffect, useState } from "react";
import { TareaContext } from "../context/tareaContext";

const TaskForm = () => {
  const { state, setState } = useContext(TareaContext); // {}
  const [tarea, setTarea] = useState({
    nameTarea: "",
    cantidad: "",
  });
  const { nameTarea, cantidad } = tarea;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameTarea.trim()) {
      console.log("campo vacio");
      return;
    }
    setState({
      ...state,
      cantidad: state.cantidad + parseInt(cantidad),
      tareas: [...state.tareas, tarea],
    });
    // setTarea("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Ingrese la tarea:</label>
        <input
          type="text"
          onChange={handleChange}
          name="nameTarea"
          value={nameTarea}
        />
        <input
          type="number"
          onChange={handleChange}
          name="cantidad"
          value={cantidad}
        />
        <button type="submit">Agregar tarea</button>
      </form>
    </>
  );
};

export default TaskForm;
