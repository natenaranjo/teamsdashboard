import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './pages/Dashboard';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Test</h1>
      <Navbar />
      <Dashboard />
    </ApolloProvider>
  );
}

export default App;
