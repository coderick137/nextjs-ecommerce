'use client'

import useProductSearch from '@/hooks/useProducts'
import { ProductCard } from './ProductCard'
import Link from 'next/link'

export function ProductList() {
  const { products } = useProductSearch()

  return (
    <section className="py-1 bg-gray-100 mt-30">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id}>
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.name}
              description={product.description}
              image={product.image_url}
              price={product.price_in_cents}
            />
          </Link>
        ))}
      </div>
    </section>
  )
}
