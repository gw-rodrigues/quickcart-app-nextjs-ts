import { twMerge } from 'tailwind-merge'
interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className, ...rest }: IButtonProps) {
  return (
    <button
      className={twMerge(
        `border border-gray-600 rounded w-full xl:w-30 p-4 bg-gray-800 text-gray-50 font-bold hover:bg-orange-400 hover:text-gray-800 cursor-pointer`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
