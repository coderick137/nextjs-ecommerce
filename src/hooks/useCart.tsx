import { useContext } from 'react'
import { Product } from '@/@types/productFatchResponse'
import { CartContext } from '@/contexts/cartContext'

export function useCart() {
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (product: Product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  return { cart, addToCart, removeFromCart, clearCart }
}
