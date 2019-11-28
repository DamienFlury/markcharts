import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Theme } from './styled';

const theme: Theme = {
  colors: {
    primary: '#ff33ff',
  },
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div>App</div>
  </ThemeProvider>
);

export default App;
