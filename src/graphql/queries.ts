import {gql} from '@apollo/client'

export const GET_PRODUCTS = gql`
  query getProducts($currency: Currency) {
      products {
          id
          image_url
          title
          price(currency: $currency)
      }
  }
`

export const GET_CURRENCIES = gql`
  query getCurrencies {
      currency
  }
`