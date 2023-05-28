'use client'

import { Product } from '@/@types/productFatchResponse'
import { createContext, ReactNode, useState } from 'react'

export const CartContext = createContext({
  cart: [] as Product[],
  // eslint-disable-next-line prettier/prettier
  setCart: (value: Product[]) => { },
})

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
