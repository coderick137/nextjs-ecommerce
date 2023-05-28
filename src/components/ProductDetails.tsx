'use client'

import { formatePrice } from '@/utils/formatPrice'
import { HTMLAttributes } from 'react'

interface ProductDetailProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  name: string
  description: string
  image: string
  price: number
}

export function ProductDetails({
  id,
  name,
  description,
  image,
  price,
  ...rest
}: ProductDetailProps) {
  return (
    <div className="min-w-screen min-h-screen flex items-center  justify-evenly p-5 lg:p-10 overflow-hidden relative bg-gray-100">
      <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div className="md:flex items-center -mx-10">
          <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
            <div className="relative">
              <img
                src={image}
                className="w-full relative z-10 rounded-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-10 mb-10">
            <div className="mb-10">
              <h1 className="font-bold uppercase text-2xl mb-5 text-blue-500">
                {name}
              </h1>
              <p className="text-sm">{description}</p>
            </div>
            <div>
              <div className="inline-block align-bottom">
                <button className="bg-blue-500 opacity-75 hover:opacity-100 text-white rounded-full px-10 py-2 font-semibold">
                  {formatePrice(price)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
