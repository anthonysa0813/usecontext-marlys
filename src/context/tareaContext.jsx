import React, { createContext, useState } from "react";

//1er paso: crear el contexto
export const TareaContext = createContext();

//2do: crear nuestro provider
const TareaProvider = (props) => {
  const [state, setState] = useState({
    tareas: [],
    cantidad: 0,
  });

  return (
    <TareaContext.Provider value={{ state, setState }}>
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaProvider;
