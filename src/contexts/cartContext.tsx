'use client'

/* eslint-disable prettier/prettier */
import { CartItem } from '@/@types/cartItem'
import { createContext, ReactNode, useState } from 'react'

export interface CartContextProps {
  cart: CartItem[]
  setCart: (value: CartItem[]) => void
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  setCart: () => { },
})

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
