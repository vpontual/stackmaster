import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import axios from 'axios';

import Home from './pages/Home';
import auth from './utils/auth.js';
import Header from './components/Header';
import Choice from './pages/Choice';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Categories from './pages/Categories';
import Study from './pages/Study';
import Footer from './components/Footer';
import FlashcardList from './components/FlashcardList';

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
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      setCards(
        res.data.results.map((item, index) => {
          let decoded_incorrect = item.incorrect_answers.map((it) => decodeString(it));
          return {
            id: `${index}-${Date.now()}`,
            question: decodeString(item.question),
            answer: decodeString(item.correct_answer),
            options: [...decoded_incorrect, decodeString(item.correct_answer)],
          };
        })
      );
    });
  }, []);

  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  // Function to redirect to login if user is not logged in

  return (
    <ApolloProvider client={client}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          {/* Public route accessible to all */}
          {/* <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />

          {/* Redirect to login if user is not logged in */}
          <Route path="/categories" element={isLoggedIn ? <Categories /> : <Navigate to="/login" />} />
          <Route path="/study/" element={isLoggedIn ? <Study /> : <Navigate to="/login" />} />
          {/* <Route path="/quiz" element={isLoggedIn ? <Quiz /> : <Navigate to="/login" />} /> */}
          <Route
            path="/flashcardlist"
            element={isLoggedIn ? <FlashcardList flashcards={cards} /> : <Navigate to="/login" />}
          />
          <Route path="/study/:name" element={isLoggedIn ? <Study /> : <Navigate to="/login" />} />
          <Route path="/signup" element={isLoggedIn ? <Navigate to="/choice" /> : <Signup />} />
          <Route path="/choice" element={isLoggedIn ? <Choice /> : <Navigate to="/login" />} />
        </Routes>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

const SAMPLE_CARDS = [
  {
    id: 1,
    question: 'What is 3 + 3 ?',
    answer: '4',
    options: ['2', '3', '5', '4'],
  },
  {
    id: 2,
    question: 'What is four + four ?',
    answer: '8',
    options: ['2', '3', '8', '4'],
  },
  {
    id: 3,
    question: 'What is six * six ?',
    answer: '36',
    options: ['2', '36', '5', '4'],
  },
];

export default App;
