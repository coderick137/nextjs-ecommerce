export function formatePrice(priceInCents: number) {
  const price = priceInCents / 100

  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}
