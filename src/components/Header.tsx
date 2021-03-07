import React, {FC} from 'react'
import {ChevronDownIcon} from 'components/SvgIcons'

const Header: FC = () => {
  return (
    <div className="w-4/5 mx-auto pt-16 pb-12 px-4 sm:pt-20 sm:pb-16 sm:px-6 lg:px-8 sm:flex sm:justify-between sm:space-x-14">
      <div className="max-w-xl flex-shrink-0">
        <h2 className="text-4xl text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          All Products
        </h2>
        <p className="mt-5 text-xl text-gray-600">A 360&deg; look at Lumin</p>
      </div>
      <div className="mt-10 w-full max-w-xs">
        <div className="relative">
          <select
            id="filter"
            name="filter"
            className="appearance-none block w-full bg-none bg-white border border-gray-300 rounded-md pl-3 pr-10 py-2 text-base text-gray-900 focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
          >
            <option value="" disabled selected>
              Filter by
            </option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
            <ChevronDownIcon fillColor="currentColor" classes="h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
