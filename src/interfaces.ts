export interface Product {
  id: number
  title: string
  image_url: string
  price: number
}

export interface CartProduct extends Product {
  quantity: number
  formattedPrice: string
}