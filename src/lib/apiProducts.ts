export async function fetchHighlights() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('Erro ao buscar produtos')
  const data = await res.json()
  return data.slice(0, 6)
}

export async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('Erro ao buscar produtos')
  return res.json()
}
