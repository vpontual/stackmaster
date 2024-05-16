import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import auth from './utils/auth.js';
import Header from './components/Header';
import Choice from './pages/Choice';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';
import Quiz from './pages/Quiz.jsx';
import Categories from './pages/Categories';
import Study from './pages/Study';
import Footer from './components/Footer';

import './App.css';

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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(auth.loggedIn());

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <ApolloProvider client={client}>
      <div className="d-flex flex-column min-vh-100">
        {!isHomePage && <Header />}
        <main className="flex-grow pt-10">
          <Routes>
            {/* Public route accessible to all */}
            <Route path="/" element={isLoggedIn ? <Navigate to="/choice" /> : <Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

            {/* Redirect to login if user is not logged in */}
            <Route path="/categories" element={isLoggedIn ? <Categories /> : <Navigate to="/login" />} />
            <Route path="/study" element={isLoggedIn ? <Study /> : <Navigate to="/login" />} />
            <Route path="/quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/login" />} />
            <Route path="/study/:name" element={isLoggedIn ? <Study /> : <Navigate to="/login" />} />
            <Route path="/signup" element={isLoggedIn ? <Navigate to="/choice" /> : <SignUp />} />
            <Route path="/choice" element={isLoggedIn ? <Choice /> : <Navigate to="/login" />} />
          </Routes>
        </main>
        {!isHomePage && <Footer />}
      </div>
    </ApolloProvider>
  );
}

export default App;
