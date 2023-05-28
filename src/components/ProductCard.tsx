/* eslint-disable @next/next/no-img-element */
'use client'
import { formatePrice } from '@/utils/formatPrice'
import { HTMLAttributes } from 'react'

interface CardProductProps extends HTMLAttributes<HTMLDivElement> {
  id: string
  title: string
  description: string
  image: string
  price: number
}

export function ProductCard({
  id,
  title,
  description,
  image,
  price,
  ...rest
}: CardProductProps) {
  return (
    <>
      <div
        className=" flex flex-wrap justify-center items-center space-x-4 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
        {...rest}
      >
        <div className="mt-1 p-2">
          <div className="relative flex items-end overflow-hidden rounded-xl">
            <img src={image} alt="Imagem de um produto" />
          </div>
          <h3 className="text-lg font-bold text-blue-500">{title}</h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <div className="mt-3 flex items-end justify-between">
            <p className="text-lg font-bold text-blue-500">
              {formatePrice(price)}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
