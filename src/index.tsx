import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloProvider } from '@apollo/client'
import { client } from './config'

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
