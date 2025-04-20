'use client'
import Link from 'next/link'
import { Menu, X, ShoppingBasket } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="h-20">
      <div className="max-w-[1440px] p-4 flex justify-between items-center m-auto">
        <Link href="/" className="font-bold text-3xl">
          Quick<span className="text-orange-500">Cart</span>
        </Link>

        <button
          onClick={toggleMenu}
          className="cursor-pointer hover:text-orange-500 transition duration-250 ease-in-out"
        >
          <Menu size={30} />
        </button>
      </div>
      <nav
        className={`fixed w-full h-dvh flex flex-col gap-10 p-8 bg-blue-100 top-0 transition duration-250 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between">
          <Link href="/" className="font-bold text-3xl">
            Quick<span className="text-orange-500">Cart</span>
          </Link>
          <button
            onClick={toggleMenu}
            className="cursor-pointer hover:text-orange-500 transition duration-250 ease-in-out"
          >
            <X size={30} />
          </button>
        </div>
        <ul className="text-xl flex flex-col gap-2">
          <li>
            <Link
              className="active:font-bold hover:text-orange-500 transition duration-250 ease-in-out"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="active:font-bold hover:text-orange-500 transition duration-250 ease-in-out"
              href="/"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="active:font-bold hover:text-orange-500 transition duration-250 ease-in-out"
              href="/"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="active:font-bold hover:text-orange-500 transition duration-250 ease-in-out"
              href="/cart"
            >
              <ShoppingBasket size={30} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
