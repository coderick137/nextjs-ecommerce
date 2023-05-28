import { useState, useEffect } from 'react'
import axios from 'axios'
import { Product } from '@/@types/productFatchResponse'

const useProductSearch = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await axios.get('http://localhost:3333') // Substitua '/api/products' pela sua rota da API

        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        setError('Ocorreu um erro ao buscar os produtos.')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { loading, error, products }
}

export default useProductSearch
