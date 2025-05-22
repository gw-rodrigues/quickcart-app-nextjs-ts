'use client'

import { SectionSubtitle } from '@/components/SectionSubtitle'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionHeader } from '@/components/SectionHeader'

import { ProductList } from '@/components/ProductList'
import { ProductListCard } from '@/components/ProductListCard'
import { MainSection } from '@/components/MainSection'
import { ReviewSection } from '@/components/ReviewSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import { TProduct } from '@/types/Product'

import { useProducts } from '@/hooks/useProducts'

export default function Home() {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error loading products.</p>

  return (
    <>
      <ReviewSection />
      <MainSection>
        <SectionHeader>
          <SectionSubtitle>Our Highlights</SectionSubtitle>
          <SectionTitle>Products</SectionTitle>
        </SectionHeader>
        <ProductList>
          {data.map((p: TProduct) => (
            <ProductListCard
              key={p.id}
              Product={p}
              ButtonType="add"
              ButtonText="Add to cart"
            />
          ))}
        </ProductList>
      </MainSection>

      <NewsletterSection />
    </>
  )
}
