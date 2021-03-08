import React, {FC} from 'react'
import LazyLoad from 'react-lazyload'
import PlaceholderImgWebp from 'images/placeholder.webp'
import PlaceholderImg from 'images/placeholder.png'

type Props = {
  id: number
  title: string
  image_url: string
  formattedPrice: string
  addCartItem: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Placeholder = (
  <picture>
    <source srcSet={PlaceholderImgWebp} type="image/webp" />
    <img src={PlaceholderImg} alt="loader" />
  </picture>
)

const ProductItem: FC<Props> = ({
  id,
  title,
  image_url,
  formattedPrice,
  addCartItem,
}) => {
  return (
    <li className="col-span-1 flex flex-col text-center bg-green-100 rounded-lg hover:shadow">
      <div className="flex-1 flex flex-col pt-8 px-4 md:px-8">
        <LazyLoad
          once
          style={{height: '8rem'}}
          placeholder={Placeholder}
          unmountIfInvisible={true}
        >
          <img
            className="h-32 flex-shrink-0 mx-auto bg-black"
            src={image_url}
            alt=""
          />
        </LazyLoad>
        <h3 className="mt-10 text-gray-900 text-sm font-medium">{title}</h3>
        <dl className="mt-1 flex-grow flex flex-col justify-between">
          <dt className="sr-only">Price</dt>
          <dd className="text-gray-500 text-sm">
            From
            <span className="mx-2">{formattedPrice}</span>
          </dd>
        </dl>
      </div>
      <div className="pt-2 pb-8">
        <button
          onClick={addCartItem}
          type="button"
          data-id={id}
          className="productItemAddBtn"
        >
          Add to Cart
        </button>
      </div>
    </li>
  )
}

export default ProductItem
