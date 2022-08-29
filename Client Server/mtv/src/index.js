import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import store from './Store';

ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </Provider>
  </React.StrictMode>
);
