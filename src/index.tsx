import React from 'react'
import ReactDOM from 'react-dom'
import {ApolloProvider} from '@apollo/client'
import client from 'graphql/apolloClient'
import 'styles/main.css'
import {CartProvider} from 'features/cart/cartContext'
import App from './App'

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartProvider>
      <App />
    </CartProvider>
  </ApolloProvider>,
  document.getElementById('root'),
)
