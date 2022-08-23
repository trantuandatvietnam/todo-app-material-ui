import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TodoProvider from "./context/TodoProvider";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);

reportWebVitals();
