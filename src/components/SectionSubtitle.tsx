interface ISectionSubtitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

export function SectionSubtitle({ children, ...rest }: ISectionSubtitleProps) {
  return (
    <span className="text-orange-500" {...rest}>
      {children}
    </span>
  )
}
