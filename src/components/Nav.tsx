'use client'
import Link from 'next/link'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from './NavLink'

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'Services', href: '/' },
    { title: 'Products', href: '/' },
    { title: 'Contact', href: '/' },
  ]

  function toggleMenu() {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="cursor-pointer hover:text-orange-500 transition duration-250 ease-in-out md:hidden"
      >
        <Menu size={30} />
      </button>
      <nav
        className={`fixed md:relative w-full md:w-auto h-dvh md:h-auto flex flex-col gap-10 p-8 md:p-2 bg-gray-50  top-0 transition duration-250 md:duration-0 ease-in-out ${
          isOpen
            ? '-translate-x-4'
            : '-translate-x-full -left-4 md:translate-x-0'
        }`}
      >
        <div className="flex justify-between md:hidden">
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
        <ul className="text-lg text-gray-700 font-bold flex flex-col md:flex-row md:gap-8">
          {navLinks.map((item) => (
            <NavLink key={item.title} href={item.href}>
              {item.title}
            </NavLink>
          ))}
          <NavLink key="cart-link" href="/">
            <ShoppingCart size={25} fill="#e5e5e5" />
          </NavLink>
        </ul>
      </nav>
    </>
  )
}
