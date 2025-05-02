'use client'
import Image from 'next/image'
import { TProduct } from '@/types/Product'
import { useTruncate } from '@/hooks/usetruncate'

interface IProductListCardProps extends React.HTMLAttributes<HTMLLIElement> {
  Product: TProduct
}

export function ProductListCard({ Product, ...rest }: IProductListCardProps) {
  return (
    <li className="max-w-[453px] bg-white rounded-xl overflow-hidden" {...rest}>
      <div className="h-[300px] overflow-hidden flex justify-center items-center">
        <Image
          src={Product.image}
          alt={Product.title}
          width={250}
          height={250}
          className="flex-0 max-h-[250px] max-w-[250px]"
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
        <p className="mt-4">{useTruncate(Product.description, 130)}</p>
      </div>
    </li>
  )
}
