'use client'
import { useCart } from '@/store/cartStore'
import { TProduct } from '@/types/Product'

interface IProductCard {
  product: TProduct
}

export default function ProductCard({ product }: IProductCard) {
  const { addItem } = useCart()
  return (
    <div className="p-4 border rounded">
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addItem(product)}>Adicionar</button>
    </div>
  )
}
