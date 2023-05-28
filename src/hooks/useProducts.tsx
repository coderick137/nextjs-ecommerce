import { useState, useEffect } from 'react'
import axios from 'axios'
import { Product } from '@/@types/productFatchResponse'

function useProductSearch() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await axios.get('http://localhost:3333')

      setProducts(response.data)
      setLoading(false)
    } catch (error) {
      setError('Ocorreu um erro ao buscar os produtos.')
      setLoading(false)
    }
  }

  return { loading, error, products }
}

export default useProductSearch
