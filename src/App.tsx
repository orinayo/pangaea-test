import Header from 'components/Header'
import Navbar from 'components/Navbar'
import ProductsList from 'features/product/ProductsList'
import Cart from 'features/cart/Cart'
import React, {FC, useContext} from 'react'
import {CartContext} from 'features/cart/cartContext'
import {formatToCurrency} from 'utils'
import {ErrorBoundary} from 'components/ErrorBoundary'

const App: FC = () => {
  // @ts-expect-error function is not a method that depends on this context, so should not trigger a warning.
  const {
    openCart,
    closeCart,
    totalItems,
    totalPrice,
    currency,
    currencies,
    updateCurrency,
    products,
    addCartItem,
    productsLoading,
    productsError,
    isOpen: isCartOpen,
  } = useContext(CartContext)
  // for testing purposes
  return (
    <ErrorBoundary>
      <div className="min-w-full min-h-screen overflow-x-hidden flex flex-col">
        <Navbar openCart={openCart} totalItems={totalItems} />
        <Header />
        <ProductsList
          addCartItem={addCartItem}
          products={products}
          loading={productsLoading}
          error={productsError}
        />
        <Cart
          formattedTotalPrice={formatToCurrency(currency, totalPrice)}
          closeCart={closeCart}
          currencies={currencies}
          isCartOpen={isCartOpen}
          updateCurrency={updateCurrency}
        />
      </div>
    </ErrorBoundary>
  )
}

export default App
