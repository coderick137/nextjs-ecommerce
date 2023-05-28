import { useContext, useEffect } from 'react'
import { CartContext } from '@/contexts/cartContext'
import { CartItem } from '@/@types/cartItem'

export function useCart() {
  const { cart, setCart } = useContext(CartContext)

  useEffect(() => {
    setCartState()
  }, [])

  function setCartState() {
    const cartData = localStorage.getItem('cart')
    const cart = cartData ? JSON.parse(cartData) : []
    setCart(cart)
  }

  async function addToCart(product: CartItem) {
    const productExists = cart?.find((item: CartItem) => item.id === product.id)

    let newCartItems

    if (productExists) {
      newCartItems = cart?.map((item: CartItem) =>
        item.id === product.id
          ? { ...product, quantity: item.quantity + 1 }
          : item,
      )
    } else {
      newCartItems = [...cart, { ...product, quantity: 1 }]
    }

    localStorage.setItem('cart', JSON.stringify({ carItems: newCartItems }))
  }

  return { cart, addToCart }
}
