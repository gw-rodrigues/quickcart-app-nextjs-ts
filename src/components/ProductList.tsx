interface IProductListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode
}

export function ProductList({ children, ...rest }: IProductListProps) {
  return (
    <ul
      className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(350,1fr))] gap-6 mt-10"
      {...rest}
    >
      {children}
    </ul>
  )
}
