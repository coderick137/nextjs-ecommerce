'use client'

import { Product } from '@/@types/productFatchResponse'
import { ProductDetails } from '@/components/ProductDetails'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface ProductDetailsPageProps {
  params: {
    id: string
  }
}

export default async function ProductDetailsPage({
  params,
}: ProductDetailsPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product>()

  useEffect(() => {
    fetchProductById(params.id)
  }, [])

  async function fetchProductById(id: string) {
    const { data } = await axios.get(`http://localhost:3333/product/${id}`)
    setSelectedProduct(data)
    console.log(data)
  }

  return (
    <>
      {selectedProduct && (
        <ProductDetails
          id={selectedProduct.id}
          name={selectedProduct.name}
          description={selectedProduct.description}
          image={selectedProduct.image_url}
          price={selectedProduct.price_in_cents}
        />
      )}
    </>
  )
}
