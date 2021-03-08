import React, {FC, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import styles from './Navbar.module.css'
import {
  HamburgerIcon,
  CartIcon,
  CloseIcon,
  ShopIcon,
  LearnIcon,
} from './SvgIcons'

const Navbar: FC<{
  totalItems: number
  openCart: () => void
}> = ({totalItems, openCart}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  const handleOpenCart = () => {
    openCart()
  }
  return (
    <div className="relative">
      <div className="navbar">
        <div className="flex">
          <span className={`${styles.logo} text-3xl md:text-4xl`}>LUMIN</span>
        </div>
        <div data-cy="navbar-toggle" className="-mr-2 -my-2 md:hidden">
          <button type="button" onClick={toggleMenu} className="navbarToggle">
            <span className="sr-only">Open menu</span>
            <HamburgerIcon />
          </button>
        </div>
        <div
          data-cy="navbar"
          className="hidden md:flex-1 md:flex md:items-center md:justify-between"
        >
          <nav className="flex space-x-10">
            <div className="relative">
              <a href="/" className="navbarLink">
                Shop
              </a>
            </div>
            <div className="relative">
              <a href="/" className="navbarLink">
                Learn
              </a>
            </div>
          </nav>
          <div className="flex items-center md:ml-12">
            <a href="/" className="navbarLink">
              Account
            </a>
            <button
              type="button"
              onClick={handleOpenCart}
              className="navbarCart"
            >
              <span className="sr-only">Cart</span>
              <CartIcon />
              {totalItems ? (
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-white">
                  {totalItems}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            data-cy="mobile-menu"
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -20}}
            exit={{opacity: 0, y: -20}}
            className="navbarMobileMenu"
          >
            <div className="navbarMobileMenuContainer">
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`${styles.logo} text-3xl`}>LUMIN</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="navbarToggle"
                    >
                      <span className="sr-only">Close menu</span>
                      <CloseIcon />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-6">
                    <a href="/" className="navbarMobileMenuLinks">
                      <div className="navbarMobileMenuIcons">
                        <ShopIcon />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Shop
                      </div>
                    </a>
                    <a href="/" className="navbarMobileMenuLinks">
                      <div className="navbarMobileMenuIcons">
                        <LearnIcon />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Learn
                      </div>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="/"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Account
                  </a>
                  <div>
                    <button
                      type="button"
                      onClick={openCart}
                      className="navbarMobileMenuCart"
                    >
                      <span className="sr-only">Cart</span>
                      <CartIcon />
                      {totalItems ? (
                        <span className="absolute -top-2 right-0 block h-2 w-2 rounded-full bg-white">
                          {totalItems}
                        </span>
                      ) : null}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default React.memo(Navbar)
