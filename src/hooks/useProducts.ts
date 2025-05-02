import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '@/lib/apiProducts'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}
