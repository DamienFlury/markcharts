import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Theme } from './styled';
import NavBar from './components/NavBar';
import Paper from './styled-components/Paper';

const theme: Theme = {
  colors: {
    primary: ['#9c008f'],
  },
  shadows: ['0 1px 3px #595959', '0 3px 5px #595959'],
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <NavBar />
    <Paper>Test</Paper>
  </ThemeProvider>
);

export default App;
