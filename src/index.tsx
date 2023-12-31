import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { theme } from "./utils/styles";
import { store } from "./utils/store";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        {/* <DndProvider backend={HTML5Backend}> */}
          <App />
        {/* </DndProvider> */}
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);