interface ISectionTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function SectionTitle({ children, ...rest }: ISectionTitleProps) {
  return (
    <h2 className="text-5xl font-bold text-gray-800" {...rest}>
      {children}
    </h2>
  )
}
