'use client'
import Image from 'next/image'
import { TProduct } from '@/types/Product'
import { useTruncate } from '@/hooks/usetruncate'
import { Button } from './Button'
import { ICartProducts, useCart } from '@/store/cartStore'
import toast from 'react-hot-toast'

interface IProductListCardProps extends React.HTMLAttributes<HTMLLIElement> {
  Product: TProduct
  ButtonType: 'add' | 'remove' | undefined
  ButtonText: string
  QuantityButton?: boolean
  QuantityValue?: number
}

export function ProductListCard({
  Product,
  ButtonType = undefined,
  ButtonText,
  QuantityButton = false,
  QuantityValue = 0,
  ...rest
}: IProductListCardProps) {
  const { addItem, removeItem, plusQuantity, menusQuantity } = useCart()

  function AddProduct() {
    addItem(Product)
    toast.success('Product add to cart!')
  }

  function RemoveProduct() {
    removeItem(Product.id)
    toast.success('Product removed from cart!')
  }

  const buttonActionType = [
    { type: 'add', fn: () => AddProduct() },
    { type: 'remove', fn: () => RemoveProduct() },
  ]

  const onClickAction = buttonActionType.find((i) => i.type === ButtonType)

  function handlePlusQuantity() {
    plusQuantity(Product.id)
  }

  function handleMenusQuantity() {
    if (QuantityValue <= 1) return removeItem(Product.id)
    menusQuantity(Product.id)
  }

  return (
    <li
      className="max-w-[453px] bg-white rounded-xl overflow-hidden relative"
      {...rest}
    >
      {QuantityButton && (
        <div className="absolute right-4 top-2">
          <button
            type="button"
            className="border border-gray-300 rounded px-3 cursor-pointer hover:bg-orange-500 hover:text-white"
            onClick={() => handleMenusQuantity()}
          >
            -
          </button>
          <span className=" m-2">{QuantityValue}</span>
          <button
            type="button"
            className="border border-gray-300 rounded px-3 cursor-pointer hover:bg-orange-500 hover:text-white"
            onClick={() => handlePlusQuantity()}
          >
            +
          </button>
        </div>
      )}
      <div className="h-[300px] overflow-hidden flex justify-center items-center">
        <Image
          src={Product.image}
          alt={Product.title}
          width={200}
          height={200}
          className="flex-0 max-h-[200px] max-w-[200px]"
        />
      </div>
      <div className="p-12">
        <header className="flex justify-between">
          <h3 className="font-bold text-xl">
            {useTruncate(Product.title, 21)}
          </h3>
          <span className="font-bold text-2xl text-orange-500">
            {Product.price} €
          </span>
        </header>
        <p className="mt-4 h-24">{useTruncate(Product.description, 130)}</p>
        <div className="flex justify-end mt-2">
          <Button onClick={onClickAction?.fn} className="xl:w-full">
            {ButtonText}
          </Button>
        </div>
      </div>
    </li>
  )
}
