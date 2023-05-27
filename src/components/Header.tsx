'use client'

import { useState } from 'react'
import Image from 'next/image'

import Logo from '../assets/logo.svg'
import { SearchIcon, ShoppingBagIcon } from 'lucide-react'

import { Input } from './Input'

export function Header() {
  const [search, setSearch] = useState('')
  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-6 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <a className="flex items-center space-x-2" href="/">
          <Image
            src={Logo}
            alt="Techcommerce"
            className="w-10 h-10 font-semibold text-blue-700"
          />
          <span className="text-2xl font-semibold">Techcommerce</span>
        </a>
        <div className="mt-2 sm:mt-0 sm:flex md:order-2">
          <div className="relative">
            <Input value={search} handleChange={setSearch} />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2" />
          </div>
          <a
            href="/"
            className="ml-4 sm:ml-6 text-blue-700 hover:text-blue-800 transition-colors duration-200"
          >
            <ShoppingBagIcon className="mt-0.5 ml-4 sm:ml-6 w-8 h-8" />
          </a>
        </div>
      </div>
    </nav>
  )
}
