
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import client from './client';
import SearchBooks from './SearchBooks';
import SavedBooks from './SavedBooks';
import Navbar from './Navbar';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route exact path="/login" component={LoginForm} />
            <Route exact path="/signup" component={SignupForm} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
