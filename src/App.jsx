import React from "react";
import { Switch, Route } from "react-router-dom";
import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TareaProvider from "./context/tareaContext";

const App = () => {
  return (
    <TareaProvider>
      <Heading />
      <Switch>
        <Route path="/" exact>
          {/* mostrará todos los items de mi estado global */}
          <TaskList></TaskList>
        </Route>
        <Route path="/add">
          {/* aquí se crea cada tarea */}
          <TaskForm />
        </Route>
      </Switch>
    </TareaProvider>
  );
};

export default App;
