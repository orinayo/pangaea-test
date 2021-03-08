import React, {FC, useEffect, useRef} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import CurrencyList from 'components/CurrencyList'
import {ChevronLeftIcon} from 'components/SvgIcons'
import ItemsList from './ItemsList'

const containerVariants = {
  animate: {
    opacity: 1,
    x: 0,
  },
  initial: {
    opacity: 0,
    x: 100,
  },
  exit: {
    opacity: 0,
    x: 500,
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

type Props = {
  isCartOpen: boolean
  closeCart: () => void
  currencies: string[]
  formattedTotalPrice: string
  updateCurrency: (newCurrency: string) => void
}

const Cart: FC<Props> = ({
  isCartOpen,
  closeCart,
  currencies,
  updateCurrency,
  formattedTotalPrice,
}) => {
  const cartToggleRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (isCartOpen) {
      const navbarToggle = cartToggleRef.current
      navbarToggle?.focus()
    }
  }, [isCartOpen])
  return (
    <AnimatePresence>
      {isCartOpen ? (
        <motion.div
          variants={containerVariants}
          animate="animate"
          initial="initial"
          exit="exit"
          data-cy="cart"
          className="fixed inset-0 max-h-screen overflow-hidden z-20"
        >
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                opacity: 0.75,
                backgroundColor: 'rgba(255, 255, 255, 1)',
              }}
              initial={{opacity: 0}}
              exit={{opacity: 1, backgroundColor: 'rgba(255, 255, 255, 0)'}}
              className="absolute inset-0"
            />
            <section
              className="absolute inset-y-0 right-0 pl-10 max-w-full flex"
              aria-labelledby="slide-over-heading"
            >
              <div className="w-screen max-w-md md:max-w-2xl">
                <div className="h-full flex flex-col py-6 bg-green-50 shadow-xl overflow-y-auto">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-center">
                      <div className="h-7 flex-grow flex items-center">
                        <button
                          onClick={closeCart}
                          ref={cartToggleRef}
                          data-cy="cart-toggle"
                          className="closeCartBtn"
                        >
                          <span className="sr-only">Close panel</span>
                          <ChevronLeftIcon />
                        </button>
                      </div>
                      <h2
                        id="slide-over-heading"
                        className="text-sm font-light text-gray-900 flex-grow"
                      >
                        YOUR CART
                      </h2>
                    </div>
                  </div>
                  <CurrencyList
                    updateCurrency={updateCurrency}
                    currencies={currencies}
                  />
                  <ItemsList />
                  <hr className="border-gray-200 px-4 sm:px-6" />
                  <div className="flex px-4 sm:px-6 py-4 space-between flex-row items-center">
                    <span className="flex-1 text-sm text-gray-500 hover:text-gray-900">
                      Subtotal
                    </span>
                    <span
                      data-cy="total-price"
                      className="text-sm text-gray-500 hover:text-gray-900"
                    >
                      {formattedTotalPrice}
                    </span>
                  </div>
                  <div className="px-4 sm:px-6 flex flex-col space-y-4">
                    <button type="button" className="cartSubscriptionBtn">
                      Make this a subscription (Save 20%)
                    </button>
                    <button type="submit" className="cartCheckoutBtn">
                      Proceed to checkout
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Cart
