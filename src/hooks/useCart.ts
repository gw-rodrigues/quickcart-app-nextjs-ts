import { ICartProducts } from '@/store/cartStore'

export function useTotalItems(items: ICartProducts[]) {
  return items.reduce((acc, p) => acc + p.quantity, 0)
}

export function useTotalPerItem(item: ICartProducts) {
  return item.price * item.quantity
}

export function useTotalValue(items: ICartProducts[]) {
  return items.reduce((acc, p) => (acc += p.price * p.quantity), 0)
}
