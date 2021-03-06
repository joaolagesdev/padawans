import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#5F3473" },
    secondary: { main: "#F8BA00" },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


