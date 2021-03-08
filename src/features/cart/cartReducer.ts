import {Product} from 'interfaces'
import {
  OPEN_CART,
  CLOSE_CART,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CURRENCY,
  SET_PRODUCT_ENTITIES,
  DELETE_CART_ITEM,
} from './cardConstants'

type OpenCartAction = {
  type: typeof OPEN_CART
}

type CloseCartAction = {
  type: typeof CLOSE_CART
}

type AddCartItemAction = {
  type: typeof ADD_CART_ITEM
  payload?: string
}

type RemoveCartItemAction = {
  type: typeof REMOVE_CART_ITEM
  payload?: string
}

type DeleteCartItemAction = {
  type: typeof DELETE_CART_ITEM
  payload?: string
}

type UpdateCurrencyAction = {
  type: typeof UPDATE_CURRENCY
  payload: string
}

type SetProductEntitiesAction = {
  type: typeof SET_PRODUCT_ENTITIES
  payload: {
    [key: number]: Product
  }
}

export type CartState = {
  items: {[key: number]: number}
  isOpen: boolean
  currency: string
  totalItems: number
  productEntities: {[key: number]: Product}
}

export type CartActions =
  | OpenCartAction
  | CloseCartAction
  | AddCartItemAction
  | RemoveCartItemAction
  | DeleteCartItemAction
  | UpdateCurrencyAction
  | SetProductEntitiesAction

export const fooAction = ({
  type: 'FOO',
} as unknown) as CartActions

export const cartReducer = (
  state: CartState,
  action: CartActions,
): CartState => {
  switch (action.type) {
    case OPEN_CART:
      return {...state, isOpen: true}
    case CLOSE_CART:
      return {...state, isOpen: false}
    case ADD_CART_ITEM: {
      const {items, totalItems} = state
      if (action.payload) {
        const itemId = Number(action.payload)
        const {[itemId]: itemCount, ...rest} = items
        const itemsUpdate = {
          ...rest,
          [itemId]: itemCount ? itemCount + 1 : 1,
        }
        return {
          ...state,
          items: itemsUpdate,
          totalItems: totalItems + 1,
        }
      }
      return state
    }
    case REMOVE_CART_ITEM: {
      const {items, totalItems} = state
      if (action.payload) {
        const itemId = Number(action.payload)
        const {[itemId]: itemCount, ...rest} = items
        const itemsUpdate = {
          ...rest,
        }
        if (itemCount > 1) {
          itemsUpdate[itemId] = itemCount - 1
        }
        return {
          ...state,
          items: itemsUpdate,
          totalItems: totalItems - 1,
        }
      }
      return state
    }
    case DELETE_CART_ITEM: {
      const {items, totalItems} = state
      if (action.payload) {
        const itemId = Number(action.payload)
        const {[itemId]: itemCount, ...rest} = items
        return {
          ...state,
          items: rest,
          totalItems: totalItems - itemCount,
        }
      }
      return state
    }
    case UPDATE_CURRENCY: {
      return {
        ...state,
        currency: action.payload,
      }
    }
    case SET_PRODUCT_ENTITIES: {
      return {
        ...state,
        productEntities: action.payload,
      }
    }
    default:
      return state
  }
}
