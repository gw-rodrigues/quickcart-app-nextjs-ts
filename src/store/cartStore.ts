import { create } from 'zustand'
import { TProduct } from '@/types/Product'

type TCartState = {
  items: TProduct[]
  addItem: (product: TProduct) => void
  removeItem: (id: number) => void
}

export const useCart = create<TCartState>((set) => ({
  items: [],
  addItem: (product) => set((state) => ({ items: [...state.items, product] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((p) => p.id !== id) })),
}))
