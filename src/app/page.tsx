'use client'

import { SectionSubtitle } from '@/components/SectionSubtitle'
import { SectionTitle } from '@/components/SectionTitle'
import { SectionHeader } from '@/components/SectionHeader'

import { ProductList } from '@/components/ProductList'
import { ProductListCard } from '@/components/ProductListCard'
import { BannerSection } from '@/components/BannerSection'
import { PartnerSection } from '@/components/PartnerSection'
import { MainSection } from '@/components/MainSection'
import { ReviewSection } from '@/components/ReviewSection'
import { NewsletterSection } from '@/components/NewsletterSection'
import { TProduct } from '@/types/Product'

import { useProducts } from '@/hooks/useProducts'

export default function Home() {
  const { data, isLoading, error } = useProducts()

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Erro ao carregar produtos</p>

  return (
    <>
      <BannerSection>
        <h1 className="text-7xl font-bold text-gray-800">
          Top <span className="text-orange-500">Products</span> Arround the
          world
        </h1>
        <p className="text-xl  text-gray-600">
          Elevate your culinary journey with our thoughtfully curated menu,
          designed to cater to diverse tastes.
        </p>
      </BannerSection>
      <PartnerSection />
      <MainSection>
        <SectionHeader>
          <SectionSubtitle>Our Highlights</SectionSubtitle>
          <SectionTitle>Products</SectionTitle>
        </SectionHeader>
        <ProductList>
          {data.map((p: TProduct) => (
            <ProductListCard key={p.id} Product={p} />
          ))}
        </ProductList>
      </MainSection>
      <ReviewSection />
      <NewsletterSection />
    </>
  )
}
