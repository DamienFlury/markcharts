import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Theme } from './styled';
import NavBar from './components/NavBar';
import Home from './components/Home';

const theme: Theme = {
  colors: {
    primary: ['#9c008f'],
  },
  shadows: ['0 1px 3px #595959', '0 3px 5px #595959', '0 5px 30px #595959'],
};

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/exams">
          Hey
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
