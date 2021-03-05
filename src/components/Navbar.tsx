import React, {FC, useState} from 'react'
import styles from './Navbar.module.css'
import {
  HamburgerIcon,
  CartIcon,
  CloseIcon,
  ShopIcon,
  LearnIcon,
} from './SvgIcons'

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative">
      <div className="flex justify-between md:justify-between items-center border-b-2 border-gray-100 py-2 px-4 md:px-8 md:space-x-16">
        <div className="flex">
          <span className={`${styles.logo} text-3xl md:text-4xl`}>LUMIN</span>
        </div>
        <div data-cy="navbar-toggle" className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
          >
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
              <a
                href="/"
                className="text-base font-medium text-gray-600 hover:text-gray-900"
              >
                Shop
              </a>
            </div>
            <div className="relative">
              <a
                href="/"
                className="text-base font-medium text-gray-600 hover:text-gray-900"
              >
                Learn
              </a>
            </div>
          </nav>
          <div className="flex items-center md:ml-12">
            <a
              href="/"
              className="text-base font-medium text-gray-600 hover:text-gray-900"
            >
              Account
            </a>
            <button
              type="button"
              className="ml-3 relative inline-flex items-center justify-center p-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
            >
              <span className="sr-only">Cart</span>
              <CartIcon />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-white">
                4
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* TODO: Use motion for transition */}
      <div
        data-cy="mobile-menu"
        className={`${
          isOpen ? '' : 'hidden'
        } absolute top-0 inset-x-0 pt-1 pb-2 px-2 transition transform origin-top-right md:hidden`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <span className={`${styles.logo} text-3xl`}>LUMIN</span>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
                >
                  <span className="sr-only">Close menu</span>
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-6">
                <a
                  href="/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
                    <ShopIcon />
                  </div>
                  <div className="ml-4 text-base font-medium text-gray-900">
                    Shop
                  </div>
                </a>
                <a
                  href="/"
                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-green-600 text-white">
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
                  className="relative inline-flex items-center justify-center px-2 rounded-md text-base font-medium text-gray-900 hover:text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
                >
                  <span className="sr-only">Cart</span>
                  <CartIcon />
                  <span className="absolute -top-2 right-0 block h-2 w-2 rounded-full bg-white">
                    4
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
