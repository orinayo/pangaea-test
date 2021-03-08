import React, {FC, useEffect, useState} from 'react'
import Loader from 'react-loader-spinner'
import {Product} from 'interfaces'
import {ExclamationIcon, EmptyIcon} from 'components/SvgIcons'
import ProductItem from './ProductItem'
import styles from './ProductsList.module.css'

type Props = {
  addCartItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  loading: boolean
  error?: string
  products: (Product & {formattedPrice: string})[]
}

const ProductsList: FC<Props> = ({addCartItem, error, products, loading}) => {
  const [displayEmpty, setDisplayEmpty] = useState(false)
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (!loading && !error) {
      timer = setTimeout(() => {
        setDisplayEmpty(true)
      }, 500)
    }
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  }, [loading, error])

  const renderProducts = () =>
    products.map(product => (
      <ProductItem
        key={product.id}
        id={product.id}
        image_url={product.image_url}
        title={product.title}
        formattedPrice={product.formattedPrice}
        addCartItem={addCartItem}
      />
    ))

  if (!loading && products.length)
    return (
      <div className="bg-green-100 py-8 md:py-16">
        <div className="w-full sm:w-11/12 mx-auto px-2 sm:px-6 lg:px-8">
          <ul
            data-cy="product-list"
            className="grid gap-4 md:gap-6 grid-cols-2 md:grid-cols-3"
          >
            {renderProducts()}
          </ul>
        </div>
      </div>
    )

  return (
    <div
      className={`${styles.container} flex flex-col items-center justify-center`}
    >
      {displayEmpty ? (
        <>
          <EmptyIcon classes="h-32 w-32 pb-4" />
          <p className="text-lg text-center">No products found</p>
        </>
      ) : loading ? (
        <span data-cy="loading">
          <Loader type="Bars" color="#fb8b24" height={50} width={50} />
        </span>
      ) : error ? (
        <>
          <ExclamationIcon classes="h-32 w-32 pb-4 stroke-current text-red-500" />
          <p className="text-lg text-center">{error}</p>
        </>
      ) : null}
    </div>
  )
}

export default ProductsList
