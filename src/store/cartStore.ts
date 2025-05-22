import { create } from 'zustand'
import { TProduct } from '@/types/Product'

export interface ICartProducts extends TProduct {
  quantity: number
}

type TCartState = {
  items: ICartProducts[]
  addItem: (product: TProduct) => void
  removeItem: (id: number) => void
  plusQuantity: (id: number) => void
  menusQuantity: (id: number) => void
}

export const useCart = create<TCartState>((set) => ({
  items: [],
  addItem: (product) => {
    set((state) => {
      let itemExists = false

      const updatedItems = state.items.reduce((acc, p) => {
        if (p.id === product.id) {
          acc.push({ ...p, quantity: p.quantity + 1 })
          itemExists = true
        } else {
          acc.push(p)
        }
        return acc
      }, [] as ICartProducts[])

      if (itemExists) {
        return {
          ...state,
          items: updatedItems,
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...product, quantity: 1 }],
        }
      }
    })
  },
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((p) => p.id !== id) })),

  plusQuantity: (id) => {
    set((state) => ({
      items: state.items.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p,
      ),
    }))
  },

  menusQuantity: (id) => {
    set((state) => ({
      items: state.items.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p,
      ),
    }))
  },
}))
