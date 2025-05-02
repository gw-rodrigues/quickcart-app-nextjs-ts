interface IMainSectionProps {
  children: React.ReactNode
}

export function MainSection({ children }: IMainSectionProps) {
  return <main className="px-4 max-w-[1440px] mt-40 m-auto">{children}</main>
}
