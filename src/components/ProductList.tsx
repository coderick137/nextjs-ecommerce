import { ProductCard } from './ProductCard'

export function ProductList() {
  return (
    <section className="py-1 bg-gray-100 mt-30">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* Product Card */}
        <ProductCard />
      </div>
    </section>
  )
}
