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
  payload: number
}

type RemoveCartItemAction = {
  type: typeof REMOVE_CART_ITEM
  payload: number
}

type DeleteCartItemAction = {
  type: typeof DELETE_CART_ITEM
  payload: number
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

export type CitiesActions =
  | OpenCartAction
  | CloseCartAction
  | AddCartItemAction
  | RemoveCartItemAction
  | DeleteCartItemAction
  | UpdateCurrencyAction
  | SetProductEntitiesAction

export const cartReducer = (
  state: CartState,
  action: CitiesActions,
): CartState => {
  switch (action.type) {
    case OPEN_CART:
      return {...state, isOpen: true}
    case CLOSE_CART:
      return {...state, isOpen: false}
    case ADD_CART_ITEM: {
      const {items, totalItems} = state
      const {[action.payload]: itemCount, ...rest} = items
      const itemsUpdate = {
        ...rest,
        [action.payload]: itemCount ? itemCount + 1 : 1,
      }
      return {
        ...state,
        items: itemsUpdate,
        totalItems: totalItems + 1,
      }
    }
    case REMOVE_CART_ITEM: {
      const {items, totalItems} = state
      const {[action.payload]: itemCount, ...rest} = items
      const itemsUpdate = {
        ...rest,
      }
      if (itemCount > 1) {
        itemsUpdate[action.payload] = itemCount - 1
      }
      return {
        ...state,
        items: itemsUpdate,
        totalItems: totalItems - 1,
      }
    }
    case DELETE_CART_ITEM: {
      const {items, totalItems} = state
      const {[action.payload]: itemCount, ...rest} = items
      return {
        ...state,
        items: rest,
        totalItems: totalItems - itemCount,
      }
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
