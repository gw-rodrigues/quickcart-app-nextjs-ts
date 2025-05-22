'use client'
import { SectionHeader } from './SectionHeader'
import { SectionSubtitle } from './SectionSubtitle'
import Image from 'next/image'

import Apple from '@/assets/apple.png'
import Brand from '@/assets/brand.png'
import Nike from '@/assets/nike.png'
import Huawei from '@/assets/huawei.png'
import Sansung from '@/assets/samsung.png'

export function PartnerSection() {
  const partners = [
    { name: 'Apple', src: Apple },
    { name: 'Brand', src: Brand },
    { name: 'Nike', src: Nike },
    { name: 'Huawei', src: Huawei },
    { name: 'Sansung', src: Sansung },
  ]
  return (
    <section className="w-full bg-gray-100 p-4 mt-20">
      <SectionHeader>
        <SectionSubtitle className="text-gray-400 font-bold">
          Our Highlights
        </SectionSubtitle>
      </SectionHeader>
      <ul className="w-full max-w-[1440px] mx-auto flex justify-around gap-10 py-10">
        {partners.map((item) => (
          <li key={item.name} className="max-w-15 text-gray-400">
            <Image src={item.src} alt={item.name} width={100} height={100} />
          </li>
        ))}
      </ul>
    </section>
  )
}
