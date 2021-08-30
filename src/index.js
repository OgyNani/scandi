import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';
import 'typeface-raleway';
import 'typeface-roboto-condensed';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider, //gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query GetCurrencies {
//         currencies
//       }
//     `
//   })
//   .then(result => console.log(result));

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
