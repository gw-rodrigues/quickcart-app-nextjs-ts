import Link from 'next/link'

interface INavLinksProps extends React.PropsWithChildren {
  href: string
  toggleMenu: () => void
}

export function NavLink({ href, toggleMenu, children }: INavLinksProps) {
  return (
    <li className="flex">
      <Link
        className="p-4 md:p-0 flex-1 active:font-bold hover:bg-orange-500 md:hover:bg-gray-50 hover:text-gray-50 md:hover:text-orange-500 transition duration-250 ease-in-out"
        href={href}
        onClick={toggleMenu}
      >
        {children}
      </Link>
    </li>
  )
}
