import 'material-components-web/dist/material-components-web.min.css';
import { ThemeProvider } from 'rmwc/Theme';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider
    options={{
      background: '#374E6B',
      primary: '#5881BA',
      secondary: '#C69C6D',
      textPrimaryOnBackground: '#374E6B',
      textPrimaryOnLight: '#374E6B'
    }}
  >
    <App />
  </ThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
