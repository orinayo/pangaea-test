import React, {FC} from 'react'
import Loader from 'react-loader-spinner'
import {Product} from 'interfaces'
import ProductItem from './ProductItem'
import styles from './ProductsList.module.css'

type Props = {
  addCartItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  loading: boolean
  error?: string
  products: (Product & {formattedPrice: string})[]
}

const ProductsList: FC<Props> = ({addCartItem, products, loading}) => {
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
  if (loading && !products.length)
    return (
      <div className={`${styles.loader} flex items-center justify-center`}>
        <span data-cy="loading">
          <Loader type="Bars" color="#fb8b24" height={50} width={50} />
        </span>
      </div>
    )
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
}

export default ProductsList
