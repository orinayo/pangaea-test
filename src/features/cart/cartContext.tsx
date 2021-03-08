/* eslint-disable @typescript-eslint/no-empty-function */
import {useQuery} from '@apollo/client'
import React, {
  useReducer,
  createContext,
  useCallback,
  FC,
  useEffect,
  useMemo,
} from 'react'
import {GET_CURRENCIES, GET_PRODUCTS} from 'graphql/queries'
import {CartProduct, Product} from 'interfaces'
import {formatToCurrency} from 'utils'
import {cartReducer, CartState} from './cartReducer'
import {
  CLOSE_CART,
  OPEN_CART,
  ADD_CART_ITEM,
  UPDATE_CURRENCY,
  SET_PRODUCT_ENTITIES,
  REMOVE_CART_ITEM,
  DELETE_CART_ITEM,
} from './cardConstants'

const normalizeProducts = (data: Product[]) =>
  data.reduce<{[key: number]: Product}>((acc, curr) => {
    acc[curr.id] = curr
    return acc
  }, {})

export const CartContext = createContext<{
  products: (Product & {formattedPrice: string})[]
  cartProducts: CartProduct[]
  totalPrice: number
  openCart: () => void
  closeCart: () => void
  addCartItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  removeCartItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  deleteCartItem: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  currency: string
  updateCurrency: (newCurrency: string) => void
  currencies?: string[]
  isOpen: boolean
  totalItems: number
  productsLoading: boolean
  productsError?: string
}>({
  products: [],
  cartProducts: [],
  totalPrice: 0,
  openCart: () => {},
  closeCart: () => {},
  addCartItem: _e => {},
  removeCartItem: _e => {},
  deleteCartItem: _e => {},
  currency: 'USD',
  updateCurrency: _newCurrency => {},
  isOpen: false,
  totalItems: 0,
  productsLoading: true,
})

const defaultState: CartState = {
  items: {},
  isOpen: false,
  currency: 'USD',
  totalItems: 0,
  productEntities: {},
}

export const CartProvider: FC = ({children}) => {
  const [{items, productEntities, currency, ...rest}, dispatch] = useReducer(
    cartReducer,
    defaultState,
  )

  const cartData = useMemo(
    () =>
      Object.entries(items).reduce<{
        totalPrice: number
        cartProducts: CartProduct[]
      }>(
        (acc, curr) => {
          const [productId, quantity] = curr
          const {price, ...restProducts} = productEntities[Number(productId)]
          const totalItemPrice = price * quantity
          acc.cartProducts.push({
            ...restProducts,
            price,
            quantity,
            formattedPrice: formatToCurrency(currency, totalItemPrice),
          })
          acc.totalPrice = acc.totalPrice + totalItemPrice
          return acc
        },
        {totalPrice: 0, cartProducts: []},
      ),
    [items, productEntities, currency],
  )

  const {data: getCurrenciesData} = useQuery<{currency: string[]}>(
    GET_CURRENCIES,
  )
  const {
    loading: getProductsLoading,
    error: getProductsError,
    data: getProductsData,
    refetch: refetchProductsData,
  } = useQuery<{products: Product[]}>(GET_PRODUCTS, {
    variables: {currency},
  })

  const openCart = useCallback(() => {
    dispatch({
      type: OPEN_CART,
    })
  }, [dispatch])

  const closeCart = useCallback(() => {
    dispatch({
      type: CLOSE_CART,
    })
  }, [dispatch])

  const addCartItem = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const itemId = event.currentTarget.dataset.id
      if (!itemId) return
      dispatch({
        type: ADD_CART_ITEM,
        payload: Number(itemId),
      })
      openCart()
    },
    [dispatch, openCart],
  )

  const removeCartItem = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const itemId = event.currentTarget.dataset.id
      if (!itemId) return
      dispatch({
        type: REMOVE_CART_ITEM,
        payload: Number(itemId),
      })
    },
    [dispatch],
  )

  const deleteCartItem = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const itemId = event.currentTarget.dataset.id
      if (!itemId) return
      dispatch({
        type: DELETE_CART_ITEM,
        payload: Number(itemId),
      })
    },
    [dispatch],
  )

  const updateCurrency = useCallback(
    async (newCurrency: string) => {
      dispatch({
        type: UPDATE_CURRENCY,
        payload: newCurrency,
      })
      const res = await refetchProductsData({currency: newCurrency})
      const normalizedProducts = normalizeProducts(res.data.products)
      dispatch({
        type: SET_PRODUCT_ENTITIES,
        payload: normalizedProducts,
      })
    },
    [dispatch, refetchProductsData],
  )

  const products = Object.values(productEntities).map(product => ({
    ...product,
    formattedPrice: formatToCurrency(currency, product.price),
  }))

  useEffect(() => {
    if (getProductsData && !products.length) {
      const normalizedProducts = normalizeProducts(getProductsData.products)
      dispatch({
        type: SET_PRODUCT_ENTITIES,
        payload: normalizedProducts,
      })
    }
  }, [getProductsData, products])

  return (
    <CartContext.Provider
      value={{
        addCartItem,
        removeCartItem,
        deleteCartItem,
        closeCart,
        openCart,
        ...cartData,
        currency,
        updateCurrency,
        currencies: getCurrenciesData?.currency,
        products,
        productsLoading: getProductsLoading,
        productsError: getProductsError?.message,
        ...rest,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
