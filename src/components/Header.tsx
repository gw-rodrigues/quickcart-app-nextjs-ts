import Link from 'next/link'
import { Nav } from './Nav'

export default function Header() {
  return (
    <header className="h-20">
      <div className="max-w-[1440px] p-4 flex justify-between items-center m-auto">
        <Link href="/" className="font-bold text-3xl">
          Quick<span className="text-orange-500">Cart</span>
        </Link>
        <Nav />
      </div>
    </header>
  )
}
