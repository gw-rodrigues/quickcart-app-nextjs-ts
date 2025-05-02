import { Box } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { SectionTitle } from './SectionTitle'
import { SectionSubtitle } from './SectionSubtitle'
import { Input } from './Input'
import { Button } from './Button'

export function NewsletterSection() {
  return (
    <section className="bg-orange-500 px-8 py-40">
      <div className="max-w-[1440px] gap-8 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300,1fr))] place-self-center items-center">
        <div className="flex justify-center">
          <Box size={300} fill="#e6e6e6" />
        </div>
        <div>
          <SectionHeader>
            <SectionTitle className="text-5xl font-bold text-gray-50">
              Get more discont if order from us
            </SectionTitle>
            <SectionSubtitle className="text-gray-100 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quos
              non sunt quas, itaque aperiam voluptas omnis explicabo commodi
              corporis ipsa harum voluptates nam rem doloribus quo libero
              repudiandae labore?
            </SectionSubtitle>
          </SectionHeader>
          <form
            action="subscribe"
            className="flex flex-col xl:flex-row gap-4 mt-8"
          >
            <Input type="text" placeholder="Your Email Address" />
            <Button type="submit">Get</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
