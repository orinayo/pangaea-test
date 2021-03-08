/// <reference types="cypress" />

import {ADD_CART_ITEM} from '../../src/features/cart/cardConstants'
import {cartReducer, fooAction} from '../../src/features/cart/cartReducer'

describe('cartReducer', () => {
  const defaultState = {
    items: {4: 1},
    isOpen: true,
    currency: 'USD',
    totalItems: 1,
    productEntities: {
      '4': {
        __typename: 'Product',
        id: 4,
        image_url:
          'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/reload-exfoliating-rub.png',
        title: 'Reload Exfoliating Rub',
        price: 16,
      },
    },
  }
  it('ADD_CART_ITEM returns the current state if action payload is undefined', () => {
    expect(
      cartReducer(defaultState, {
        type: ADD_CART_ITEM,
      }),
    ).to.deep.equal(defaultState)
  })
  it('REMOVE_CART_ITEM returns the current state if action payload is undefined', () => {
    expect(
      cartReducer(defaultState, {
        type: 'REMOVE_CART_ITEM',
      }),
    ).to.deep.equal(defaultState)
  })
  it('DELETE_CART_ITEM returns the current state if action payload is undefined', () => {
    expect(
      cartReducer(defaultState, {
        type: 'DELETE_CART_ITEM',
      }),
    ).to.deep.equal(defaultState)
  })
  it('returns state if action type does not match', () => {
    expect(cartReducer(defaultState, fooAction)).to.deep.equal(defaultState)
  })
})
