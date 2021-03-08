import {CartIcon} from 'components/SvgIcons'
import {motion} from 'framer-motion'
import React, {FC, useContext} from 'react'
import {CartContext} from './cartContext'
import CartItem from './CartItem'
import styles from './ItemsList.module.css'

const variants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.1},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
}

const ItemsList: FC = () => {
  const {
    removeCartItem,
    cartProducts,
    addCartItem,
    deleteCartItem,
    isOpen
  } = useContext(CartContext)

  if (!cartProducts.length)
    return (
      <div className="h-full flex flex-col items-center justify-center">
        <CartIcon
          classes="h-24 w-24 stroke-current text-green-500"
          strokeWidth={1}
        />
        <h3 className="text-xl text-gray-600">Your cart is empty</h3>
      </div>
    )

  return (
    <div
      className={`${styles.itemsContainer} overflow-y-auto my-6 relative flex-1 px-4 sm:px-6`}
    >
      <motion.ul
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className="h-full"
      >
        {cartProducts.map(cartItem => (
          <CartItem
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.title}
            image_url={cartItem.image_url}
            formattedPrice={cartItem.formattedPrice}
            quantity={cartItem.quantity}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
            deleteCartItem={deleteCartItem}
          />
        ))}
      </motion.ul>
    </div>
  )
}

export default ItemsList
