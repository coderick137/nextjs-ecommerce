/* eslint-disable @next/next/no-img-element */
import { ShoppingCartIcon } from 'lucide-react'

export function ProductCard() {
  return (
    <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
      <div className="mt-1 p-2">
        <div className="relative flex items-end overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Imagem de um produto"
          />
        </div>
        <h3 className="text-lg font-bold text-blue-500">Product name</h3>
        <p className="mt-1 text-sm text-gray-500">Product description</p>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-lg font-bold text-blue-500">$899</p>
          <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
            <ShoppingCartIcon className="w-5 h-5" />
            <button className="text-sm">Add to cart</button>
          </div>
        </div>
      </div>
    </article>
  )
}
