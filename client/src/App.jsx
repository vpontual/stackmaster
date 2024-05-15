import { Routes, Route, Navigate } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useState } from 'react';

import auth from './utils/auth.js';
import Header from './components/Header';
import Choice from './pages/Choice';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Categories from './pages/Categories';
import Study from './pages/Study';
import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.loggedIn());

  // Function to redirect to login if user is not logged in

  return (
    <ApolloProvider client={client}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          {/* Public route accessible to all */}
          <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {/* Redirect to login if user is not logged in */}
          <Route path="/categories" element={isLoggedIn ? <Categories /> : <Navigate to="/login" />} />
          <Route path="/study/" element={isLoggedIn ? <Study /> : <Navigate to="/login" />} />
          {/* <Route path="/quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/login" />} /> */}
          <Route path="/study/:name" element={isLoggedIn ? <Study /> : <Navigate to="/login" />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/choice" /> : <Signup />} />
          <Route path="/choice" element={isLoggedIn ? <Choice /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
