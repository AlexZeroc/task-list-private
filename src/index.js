import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MockTasksProvider } from "./store/task-list";

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MockTasksProvider>
      <App />
    </MockTasksProvider>
  </React.StrictMode>,
);

reportWebVitals();
