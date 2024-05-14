import { Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

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
  return (
    <ApolloProvider client={client}>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/study/:name" element={<Study />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/choice" element={<Choice />} />
        </Routes>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;
