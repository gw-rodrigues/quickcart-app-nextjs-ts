import Image from 'next/image'
import { CircleArrowRight } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { SectionSubtitle } from './SectionSubtitle'
import { SectionTitle } from './SectionTitle'

import Reviews from '@/assets/review.jpg'
import Person from '@/assets/person.jpg'

export function ReviewSection() {
  return (
    <section className="max-w-[1440px] gap-8 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300,1fr))] place-self-center items-center px-8 py-40 mt-20">
      <div className="flex justify-center">
        <Image
          src={Reviews}
          alt="Reviews image"
          width={300}
          height={300}
          className="-rotate-4 rounded-2xl"
        />
      </div>
      <div className="flex flex-col xl:flex-row gap-4 xl:items-center">
        <div>
          <SectionHeader>
            <SectionSubtitle>Customers Reviews</SectionSubtitle>
            <SectionTitle>What they say about us</SectionTitle>
          </SectionHeader>
          <div className="flex items-center gap-8 mt-8">
            <div className="rounded-full w-15 h-15 flex items-center justify-center overflow-hidden">
              <Image src={Person} alt="Person image" width={100} height={100} />
            </div>
            <div>
              <p className="font-bold text-gray-800">Raymond Lucifer</p>
              <p className="font-bold text-xs text-gray-500">Bike Rider</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Pariatur voluptatibus minus nihil placeat itaque blanditiis...&quot;
          </p>
        </div>
        <button className="text-orange-300 hover:text-orange-500 transition duration-200 cursor-pointer">
          <CircleArrowRight size={60} fill="#ffffff" />
        </button>
      </div>
    </section>
  )
}
