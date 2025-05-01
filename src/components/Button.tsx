interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...rest }: IButtonProps) {
  return (
    <button
      className="border border-gray-600 rounded w-full xl:w-30 p-4 bg-gray-800 text-gray-50 font-bold hover:bg-orange-400 hover:text-gray-800"
      {...rest}
    >
      {children}
    </button>
  )
}
