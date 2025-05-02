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

export default function Home() {
  const list = [
    {
      id: 1,
      title: 'Sushi',
      price: 29,
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates possimus eveniet natus cumque odio accusamus voluptatum?',
      category: 'Food',
      image: 'https://images.unsplash.com/photo-1726607424598-139ff3391ce8',
      rating: {
        rate: 4,
        count: 831,
      },
    },
  ]
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
          <ProductListCard Product={list[0]} />
        </ProductList>
      </MainSection>
      <ReviewSection />
      <NewsletterSection />
    </>
  )
}
