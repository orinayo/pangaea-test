import React, {FC} from 'react'
import {ChevronDownIcon} from 'components/SvgIcons'

const Header: FC = () => {
  return (
    <div className="headerContainer w-4/5">
      <div className="max-w-xl flex-shrink-0">
        <h2 className="headerMain">All Products</h2>
        <p className="mt-5 text-xl text-gray-600">A 360&deg; look at Lumin</p>
      </div>
      <div className="mt-10 w-full max-w-xs">
        <div className="relative">
          <select
            id="filter"
            name="filter"
            className="headerFilter"
          >
            <option value="" disabled selected>
              Filter by
            </option>
          </select>
          <div className="headerFilterIcon">
            <ChevronDownIcon
              fillColor="currentColor"
              classes="h-4 w-4 text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Header)
