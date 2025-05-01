interface ISectionHeaderProps {
  children: React.ReactNode
}

export function SectionHeader({ children }: ISectionHeaderProps) {
  return <header className="flex flex-col items-center">{children}</header>
}
