import { Award, Gauge, Medal, Trophy } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { SectionSubtitle } from './SectionSubtitle'

export function PartnerSection() {
  const partners = [
    <Award key="award" size="auto" fill="#f3f3f3" />,
    <Medal key="medal" size="auto" fill="#f3f3f3" />,
    <Trophy key="trophy" size="auto" fill="#f3f3f3" />,
    <Gauge key="gauge" size="auto" fill="#f3f3f3" />,
  ]
  return (
    <section className="w-full bg-gray-100 p-4 mt-20">
      <SectionHeader>
        <SectionSubtitle className="text-gray-400 font-bold">
          Our Highlights
        </SectionSubtitle>
      </SectionHeader>
      <ul className="w-full flex justify-around gap-10 overflow-hidden  py-10">
        {partners.map((item) => (
          <li key={item.key} className="max-w-15 text-gray-400">
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
