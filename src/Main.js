import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import NavBar from './components/navigation/NavBar';
import GlobalContextProvider from './contexts/GlobalContextProvider';
import BooksPage from './pages/BooksPage';
import AddBookPage from './pages/AddBookPage';

function App() {
  return (
    <BrowserRouter>

      {/* GlobalContextProvider imports User and Navigation context providers */}
      <GlobalContextProvider>

        <NavBar />

        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/my-books" component={BooksPage} />
          <Route exact path="/add-book" component={AddBookPage} />
          <Redirect to="/" />
        </Switch>

      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
