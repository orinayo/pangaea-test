import React, {FC} from 'react'
import {ChevronDownIcon} from './SvgIcons'

type Props = {
  updateCurrency: (newCurrency:string) => void
  currencies: string[]
}

const CurrencyList: FC<Props> = ({updateCurrency, currencies}) => {
   const handleKeyDown = ({key, currentTarget}:React.KeyboardEvent<HTMLSelectElement>) => {
    if(/enter/i.test(key)){
      updateCurrency(currentTarget.value)
    }
   }
   const handleClick = ({target}: React.ChangeEvent<HTMLSelectElement>) => {
     updateCurrency(target.value)
   }
  return (
    <div className="pt-2 w-2/5 md:w-1/5 px-4 sm:px-6">
      <div className="relative">
        <select
          name="currencies"
          data-cy='currencies'
          className="currencyList"
          onKeyDown={handleKeyDown}
          onChange={handleClick}
        >
          {currencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
        <div className="currencyListIcon">
          <ChevronDownIcon
            fillColor="currentColor"
            classes="h-4 w-4 text-gray-400"
          />
        </div>
      </div>
    </div>
  )
}

function areEqual(
  prevProps: Readonly<React.PropsWithChildren<Props>>,
  nextProps: Readonly<React.PropsWithChildren<Props>>,
) {
  return prevProps.currencies.length === nextProps.currencies.length
}

export default React.memo(CurrencyList, areEqual)
