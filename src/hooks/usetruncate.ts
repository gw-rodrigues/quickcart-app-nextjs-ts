export function useTruncate(text: string, max = 40) {
  return text.length > max ? text.slice(0, max) + '...' : text
}
