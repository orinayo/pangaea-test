import {CloseIcon} from 'components/SvgIcons'
import {motion} from 'framer-motion'
import React, {FC} from 'react'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
}

type Props = {
  id: number
  title: string
  image_url: string
  formattedPrice: string
  quantity: number
  removeCartItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
  addCartItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  deleteCartItem: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}
const CartItem: FC<Props> = ({
  title,
  image_url,
  quantity,
  formattedPrice,
  id,
  addCartItem,
  removeCartItem,
  deleteCartItem,
}) => {
  return (
    <motion.li
      variants={variants}
      className="cartItem"
    >
      <div className="flex justify-end">
        <button
          type="button"
          data-id={id}
          onClick={deleteCartItem}
          className="deleteCartItemBtn"
        >
          <span className="sr-only">Close</span>
          <CloseIcon classes="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-col items-start pt-2 space-y-3">
        <h3 className="cartItemName">
          {title}
        </h3>
        <div className="ml-auto pr-6 md:pr-12">
          <img
            className="h-10 w-10 md:h-12 md:w-12"
            src={image_url}
            alt={title}
          />
        </div>
        <div className="flex items-center w-full button">
          <span className="cartItemQtyBox">
            <button
              type="button"
              data-id={id}
              onClick={removeCartItem}
              className="pr-5 cartItemQtyBtn"
            >
              <span className="sr-only">Remove</span>
              &minus;
            </button>
            <span>{quantity}</span>
            <button
              type="button"
              data-id={id}
              onClick={addCartItem}
              className="pl-5 cartItemQtyBtn"
            >
              <span className="sr-only">Add</span>
              &#43;
            </button>
          </span>
          <span className="flex-shrink-0 w-1/2">{formattedPrice}</span>
        </div>
      </div>
    </motion.li>
  )
}

export default CartItem
