interface IBannerSectionProps {
  children: React.ReactNode
}

export function BannerSection({ children }: IBannerSectionProps) {
  return (
    <section className="w-full bg-blue-300 h-[600px] bg-[url('/banner.jpg')] bg-cover bg-no-repeat bg-center">
      <header className="h-full flex flex-col justify-center items-center gap-8 px-8">
        {children}
      </header>
    </section>
  )
}
