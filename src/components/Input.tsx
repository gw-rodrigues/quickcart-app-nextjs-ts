export function Input({
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="border border-gray-600 rounded w-full p-4 bg-gray-50"
      {...rest}
    />
  )
}
