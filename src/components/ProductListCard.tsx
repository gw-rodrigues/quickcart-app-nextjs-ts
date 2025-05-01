import Image from 'next/image'
import { TProduct } from '@/types/Product'

interface IProductListCardProps extends React.HTMLAttributes<HTMLLIElement> {
  Product: TProduct
}

export function ProductListCard({ Product, ...rest }: IProductListCardProps) {
  return (
    <li className="max-w-[453px] bg-white rounded-xl overflow-hidden" {...rest}>
      <div className="max-h-[300px] overflow-hidden">
        <Image
          src={Product.image}
          alt={Product.title}
          width={453}
          height={300}
        />
      </div>
      <div className="p-12">
        <header className="flex justify-between">
          <h3 className="font-bold text-xl">{Product.title}</h3>
          <span className="font-bold text-2xl text-orange-500">
            {Product.price} €
          </span>
        </header>
        <p className="mt-4">{Product.description}</p>
      </div>
    </li>
  )
}
