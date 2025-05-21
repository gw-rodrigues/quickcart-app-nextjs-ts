import { useQuery } from '@tanstack/react-query'
import { fetchHighlights, fetchProducts } from '@/lib/apiProducts'

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
}

export function useHighlights() {
  return useQuery({
    queryKey: ['highlights'],
    queryFn: fetchHighlights,
  })
}
