'use client'

import { SectionSubtitle } from '@/components/SectionSubtitle'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionHeader } from '@/components/SectionHeader'

import { ProductList } from '@/components/ProductList'
import { ProductListCard } from '@/components/ProductListCard'
import { MainSection } from '@/components/MainSection'
import { ReviewSection } from '@/components/ReviewSection'
import { NewsletterSection } from '@/components/NewsletterSection'

import { ICartProducts, useCart } from '@/store/cartStore'
import { useTotalPerItem, useTotalValue } from '@/hooks/useCart'
import { useTruncate } from '@/hooks/usetruncate'

export default function Home() {
  const { items } = useCart()
  const totalValue = useTotalValue(items)

  function TotalPeritem(product: ICartProducts) {
    return useTotalPerItem(product)
  }

  function Truncate(text: string) {
    return useTruncate(text, 20)
  }

  return (
    <>
      <MainSection>
        <SectionHeader>
          <SectionSubtitle>Selected</SectionSubtitle>
          <SectionTitle>Products</SectionTitle>
        </SectionHeader>
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="flex-1/12 h-fit xl:order-2 bg-white p-8 border border-gray-300 rounded-2xl mt-10">
            <SectionHeader>
              <SectionSubtitle>Sum of Products</SectionSubtitle>
            </SectionHeader>
            <ul className="mt-8">
              {items.length ? (
                items.map((p: ICartProducts) => (
                  <li key={p.id}>
                    {p.quantity}x - {Truncate(p.title)} - {TotalPeritem(p)} €
                  </li>
                ))
              ) : (
                <p>Your cart is empty.</p>
              )}
            </ul>
            <p className="mt-8 text-xl border-t font-bold text-orange-500">
              TOTAL: {Number(totalValue).toFixed(2)} €
            </p>
          </div>
          <div className="flex-auto xl:order-1">
            <ProductList>
              {items.length ? (
                items.map((p: ICartProducts) => (
                  <ProductListCard
                    key={p.id}
                    Product={p}
                    ButtonType="remove"
                    ButtonText="Remove from cart"
                    QuantityButton
                    QuantityValue={p.quantity}
                  />
                ))
              ) : (
                <p>
                  Your cart is empty, please selected some items of our list of
                  products.
                </p>
              )}
            </ProductList>
          </div>
        </div>
      </MainSection>
      <ReviewSection />
      <NewsletterSection />
    </>
  )
}
